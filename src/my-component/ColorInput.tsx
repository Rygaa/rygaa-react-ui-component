import React from 'react';
import classes from "../assets/inputs/ColorInput.module.scss";
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
    <div className={classes["ry-root-colorinputt"]} style={props.style}>
      {ryLabel && (
        <p className={classes["ry-label-colorinputt"]}>{ryLabel}</p>
      )}
      <div>
        <input
          style={{
            backgroundColor: `${props.color}`,

          }}
          type="button"
          onClick={() => {
            setColorPickerOpen(!colorPickerOpen);
          }}
        />
        {colorPickerOpen && 
          <div>
            <HexColorPicker color={color} onChange={x} />
            <button onClick={() => setColorPickerOpen(false)}>Close</button>
          </div>
        }

      </div>
    </div>
  );
};


export { ColorInputProps, ColorInput };
