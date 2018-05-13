import { h } from "preact";
import "./ButtonField.css";

export default function (props){
  return (
    <button className="button-field" onClick={props.onClick}>
      <label>{props.label}</label>
      <div>{props.children}</div>
    </button>
  );
}