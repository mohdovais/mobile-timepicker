import { Component, h } from "preact";
import Field from "./ButtonField";
import TimePicker from "./TimePicker";
import Popover from "./Popover";

export default class TimeField extends Component {
  constructor(props) {
    super(props);
    this.togglePop = this.togglePop.bind(this);
    this.state = {
      editing: false,
      value: props.value
    };
  }

  render() {
    return (
      <div>
        <Field label={this.props.label} onClick={this.togglePop}>
          <div>{this.state.value}</div>
        </Field>
        {this.getPop(this.state.editing)}
      </div>
    );
  }

  getPop(show) {
    if (show) {
      return (
        <Popover>
          <TimePicker
            time={this.state.value}
            label={this.props.label}
            onCancel={this.togglePop}
            onSave={this.onChange.bind(this)}
          />
        </Popover>
      );
    }
  }

  togglePop() {
    this.setState(state => {
      return Object.assign({}, state, {
        editing: !state.editing
      });
    });
  }

  onChange(value){
    this.setState(state => {
      return Object.assign({}, state, {
        editing: false,
        value: value
      });
    });
  }
}
