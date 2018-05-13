import "./main.css";
import {
  render,
  h
} from "preact";
import TimeField from "./components/TimeField";


function onChange(value){
  console.log(value);
}

render( <TimeField label="Start Time" value="14:45" onChange={onChange} /> , document.body);