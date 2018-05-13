
import {h } from "preact";
import "./Popover.css";

export default function(props){
  return (
    <div class="popover">
      <div class="popover-bg"></div>
      <div class="popover-content">{props.children}</div>
      
    </div>
  );
}