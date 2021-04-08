import React from "react";
import { SketchPicker } from "react-color";
import appStyles from "../../styles/app.js";

function ColorPicker(props) {
  return (
    <div>
      <div style={appStyles.colorPicker.container} onClick={props.onClick}>
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "2px",
            color: "#ccc",
            background: props.color,
          }}
        />
      </div>
      {props.active ? (
        <div style={appStyles.colorPicker.activeDiv}>
          <div
            style={appStyles.colorPicker.pickerContainer}
            onClick={props.onClose}
          />
          <SketchPicker
            color={props.color}
            onChangeComplete={props.onChangeComplete}
          />
        </div>
      ) : null}
    </div>
  );
}

export default ColorPicker;
