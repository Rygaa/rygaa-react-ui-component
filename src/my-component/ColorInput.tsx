import React from 'react';
import classes from "./Input.module.scss";
import { HexColorPicker } from "react-colorful";

interface ColorInputProps extends React.ButtonHTMLAttributes<HTMLElement> {
  ryImage: HTMLElement;
  ryShowIcon?: boolean;
  ryIcon?: string;
  ryLabel?: string,
  ryColor?: string,
}

const ColorInput: React.FC<ColorInputProps> = ({ ryColor, ryShowIcon, ryLabel, ryIcon, ryImage, ...props }) => {
  const x = (e: any) => {
    if (props.onChange) {
      props.onChange(e);
    }

  };

  const [colorPickerOpen, setColorPickerOpen] = React.useState(false);
  const color = props.color ? props.color : "#FFFFFF";
  return (
    <div className={classes["custom-component"]} style={props.style}>
      {ryLabel && (
        <p className={classes["label-custom-component"]}>{ryLabel}</p>
      )}
      <div>
        <input
          style={{
            backgroundColor: `${props.color}`,
            width: "100%",
            height: "50px",
            border: "none",
            borderRadius: "5px",
          }}
          type="button"
          onClick={() => {
            setColorPickerOpen(!colorPickerOpen);
          }}
        />
        {colorPickerOpen && <HexColorPicker color={color} onChange={x} />}
        {colorPickerOpen && (
          <button onClick={() => setColorPickerOpen(false)}>Close</button>
        )}
      </div>
    </div>
  );
};


export { ColorInputProps, ColorInput };
