import { Component, h } from "preact";
import Picker from "./Picker";
import { getHours, getMinutes, getAmPm } from "./picker-stores";
import "./TimePicker.css";

const hoursStore = getHours();
const minutesStore = getMinutes();
const ampmStore = getAmPm();
const leftPad = function(num) {
  return num < 10 ? "0" + num : num.toString();
};

export default class TimePicker extends Component {
  constructor(props) {
    super(props);
    this.onHourChange = this.onHourChange.bind(this);
    this.onMinutesChange = this.onMinutesChange.bind(this);
    this.onAmPMChange = this.onAmPMChange.bind(this);

    const times = (props.time || "0:0").split(":").map(x => parseInt(x));
    const hh = times[0] || 0;

    this.state = {
      hours: hh < 12 ? hh || 12 : hh - 12,
      minutes: times[1] || 0,
      ampm: hh < 12 ? "am" : "pm"
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const onChange = nextProps.onChange;
    if (nextState !== this.state) {
      if (typeof onChange === "function") {
        onChange(this.rawToValue(nextState));
      }
      return false;
    }

    return true;
  }

  render() {
    const state = this.state;

    return (
      <div className="time-picker">
        <div className="time-picker-toolbar">
          <button type="button" onClick={this.props.onCancel}>
            Cancel
          </button>
          <span>{this.props.label}</span>
          <button type="button" onClick={this.onSave.bind(this)}>
            Done
          </button>
        </div>
        <div className="time-picker-pickers">
          <Picker
            store={hoursStore}
            value={state.hours}
            onChange={this.onHourChange}
          />
          <Picker
            store={minutesStore}
            value={state.minutes}
            onChange={this.onMinutesChange}
          />
          <Picker
            store={ampmStore}
            value={state.ampm}
            onChange={this.onAmPMChange}
          />
        </div>
      </div>
    );
  }

  onHourChange(selection) {
    this.setAsyncState("hours", selection.value);
  }

  onMinutesChange(selection) {
    this.setAsyncState("minutes", selection.value);
  }

  onAmPMChange(selection) {
    this.setAsyncState("ampm", selection.value);
  }

  setAsyncState(propName, value) {
    this.setState(state => {
      return Object.assign({}, state, {
        [propName]: value
      });
    });
  }

  rawToValue(state) {
    let hrCorrection;
    if (state.hours === 12) {
      hrCorrection = state.ampm === "am" ? -12 : 0;
    } else {
      hrCorrection = state.ampm === "am" ? 0 : 12;
    }

    const hours = leftPad(state.hours + hrCorrection);
    const minutes = leftPad(state.minutes);
    return hours + ":" + minutes;
  }

  onSave() {
    const onSave = this.props.onSave;
    if (typeof onSave === "function") {
      onSave(this.rawToValue(this.state));
    }
  }
}
