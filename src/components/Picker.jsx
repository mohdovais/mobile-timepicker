import { Component, h } from "preact";
import "./Picker.css";

const TIME_CONSTANT = 325;
const TOUCH_EVENT = typeof window.ontouchstart !== "undefined";
const TOUCH_EVENT_END = TOUCH_EVENT ? "touchend" : "mouseup";
function ypos(e) {
  // touch event
  if (e.targetTouches && e.targetTouches.length >= 1) {
    return e.targetTouches[0].clientY;
  }

  // mouse event
  return e.clientY;
}

export default class Picker extends Component {
  constructor(props) {
    super(props);
    this.setRef = el => (this.el = el);
    this.autoScroll = this.autoScroll.bind(this);
    this.track = this.track.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onDocumentTouchEnd = this.onDocumentTouchEnd.bind(this);
    this.listeners = this.getListeners();
    this.state = {
      selectedIndex: 0,
      offset: 0
    };
  }

  componentDidMount() {
    const el = this.el;
    const scroller = el.firstElementChild;
    const snap = scroller.firstElementChild.offsetHeight;
    const count = scroller.childElementCount;
    const store = this.props.store;
    let i = 0,
      l = store.length,
      selectedIndex = 0;

    for (; i < l; i++) {
      if (store[i].value === this.props.value) {
        selectedIndex = i;
        break;
      }
    }

    const offset = snap * selectedIndex;

    this.pickerState = {
      offset,
      min: 0,
      max: (count - 3) * snap,
      snap,
      count,
      timestamp: Date.now(),
      reference: undefined,
      velocity: undefined,
      amplitude: undefined,
      frame: undefined,
      ticker: undefined,
      target: undefined
    };

    this.addEventListener(scroller, this.listeners);
    this.scroller = scroller;
    this.setState(state => {
      return Object.assign({}, state, {
        offset,
        selectedIndex
      });
    });
  }

  render() {
    const store = this.props.store;
    const { selectedIndex, offset } = this.state;
    const style = `transform: translate3d(0px, -${offset}px, 0px)`;

    return (
      <div className="picker" ref={this.setRef}>
        <ul className="picker-scroller" style={style}>
          <li key="key-start">&nbsp;</li>
          {store.map(function(o, i) {
            return (
              <li
                key={o.value}
                className={selectedIndex === i ? "selected" : false}
              >
                {o.label}
              </li>
            );
          })}
          <li key="key-end">&nbsp;</li>
        </ul>
      </div>
    );
  }

  componentWillUnmount() {
    this.removeEventListeners(this.scroller, this.listeners);
  }

  getValue() {
    const state = this.pickerState;
    return this.props.store[state.offset / state.snap];
  }

  onIdle() {
    this.props.onChange(this.getValue());
  }

  addEventListener(el, listeners) {
    const addListener = el.addEventListener.bind(el);
    document.addEventListener(TOUCH_EVENT_END, this.onDocumentTouchEnd);
    for (let i in listeners) {
      addListener(i, listeners[i]);
    }
  }

  removeEventListeners(el, listeners) {
    const removeListener = el.removeEventListener.bind(el);
    document.removeEventListener(TOUCH_EVENT_END, this.onDocumentTouchEnd);
    for (let i in listeners) {
      removeListener(i, listeners[i]);
    }
  }

  getListeners() {
    var listeners = {};
    listeners[TOUCH_EVENT ? "touchstart" : "mousedown"] = this.onTouchStart;
    listeners[TOUCH_EVENT ? "touchmove" : "mousemove"] = this.onTouchMove;
    listeners[TOUCH_EVENT_END] = this.onTouchEnd;
    return listeners;
  }

  onTouchStart(event) {
    this.stopEvent(event);
    this.pressed = true;
    this.initDrag(ypos(event));
    return false;
  }

  onTouchMove(event) {
    this.stopEvent(event);
    if (this.pressed) {
      this.drag = true;
      this.startDrag(ypos(event));
    }
    return false;
  }

  onTouchEnd(event) {
    this.stopEvent(event);

    if (this.drag) {
      this.stopDrag();
    } else {
      this.onClick(event);
    }

    return (this.pressed = this.drag = false);
  }

  onDocumentTouchEnd() {
    if (this.drag) {
      this.stopDrag();
      this.pressed = this.drag = false;
    }
  }

  onClick(event) {
    const targetLI = event.target;
    const pickerState = this.pickerState;
    const selectedIndex =
      Array.prototype.indexOf.call(targetLI.parentElement.children, targetLI) -
      1;
    const offset = selectedIndex * pickerState.snap;

    if (!(selectedIndex < 0 || selectedIndex > pickerState.count - 3)) {
      pickerState.offset = offset;
      this.setState(state => {
        return Object.assign({}, state, {
          selectedIndex,
          offset
        });
      }, this.onIdle);
    }
  }

  stopEvent(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    event.stopPropagation();
  }

  scroll(y) {
    const pickerState = this.pickerState;
    const max = pickerState.max;
    const min = pickerState.min;
    const offset = y > max ? max : y < min ? min : y;

    pickerState.offset = offset;
    //this.scroller.style.transform = "translate3d(0," + -offset + "px,0)";
    this.setState(state => {
      return Object.assign({}, state, {
        offset,
        selectedIndex: Math.round(offset / pickerState.snap)
      });
    });
  }

  track() {
    const pickerState = this.pickerState;
    const now = Date.now();
    const elapsed = now - pickerState.timestamp;
    const delta = pickerState.offset - pickerState.frame;
    const v = 1000 * delta / (1 + elapsed);

    pickerState.timestamp = now;
    pickerState.frame = pickerState.offset;
    pickerState.velocity = 0.8 * v + 0.2 * pickerState.velocity;
  }

  autoScroll() {
    const pickerState = this.pickerState;
    var elapsed, delta;

    if (pickerState.amplitude) {
      elapsed = Date.now() - pickerState.timestamp;
      delta = -pickerState.amplitude * Math.exp(-elapsed / TIME_CONSTANT);
      if (delta > 5 || delta < -5) {
        this.scroll(pickerState.target + delta);
        requestAnimationFrame(this.autoScroll);
      } else {
        this.scroll(pickerState.target);
        this.onIdle();
      }
    }
  }

  initDrag(y) {
    const pickerState = this.pickerState;

    pickerState.reference = y;
    pickerState.velocity = 0;
    pickerState.amplitude = 0;
    pickerState.frame = pickerState.offset;
    pickerState.timestamp = Date.now();
    clearInterval(pickerState.ticker);
    pickerState.ticker = setInterval(this.track, 100);
  }

  startDrag(y) {
    const pickerState = this.pickerState;
    const delta = pickerState.reference - y;

    if (delta > 2 || delta < -2) {
      pickerState.reference = y;
      this.scroll(pickerState.offset + delta);
    }
  }

  stopDrag() {
    const pickerState = this.pickerState;

    clearInterval(pickerState.ticker);
    pickerState.target = pickerState.offset;

    if (pickerState.velocity > 10 || pickerState.velocity < -10) {
      pickerState.amplitude = 0.8 * pickerState.velocity;
      pickerState.target = pickerState.offset + pickerState.amplitude;
    }
    pickerState.target =
      Math.round(pickerState.target / pickerState.snap) * pickerState.snap;
    pickerState.amplitude = pickerState.target - pickerState.offset;
    pickerState.timestamp = Date.now();
    requestAnimationFrame(this.autoScroll);
  }
}
