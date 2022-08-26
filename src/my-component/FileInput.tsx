import React from 'react';
import classes from "./Input.module.scss";
import { HexColorPicker } from "react-colorful";

interface FileInputProps extends React.ButtonHTMLAttributes<HTMLElement> {
  ryImage: string;
  ryShowIcon?: boolean;
  ryIcon?: string;
  ryLabel?: string,
  ryColor?: string,
}

const FileInput: React.FC<FileInputProps> = ({ ryColor, ryShowIcon, ryLabel, ryIcon, ryImage, ...props }) => {
//  const inputRef: React.Ref = React.useRef(null) ;
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className={classes["file-input-component"]} style={props.style}>
      {ryLabel && (
        <p className={classes["label-file-input"]}>{ryLabel}</p>
      )}

      <div className={classes["container-file-input"]}>
        <img
          onClick={() => {
            if (inputRef && inputRef.current) {
            inputRef.current.click();

            }
          }}
          src={ryImage}
        ></img>
        <input
          ref={inputRef}
          style={{ display: "none" }}
          onChange={(e) => {

            // props.onChange(inputRef.current.files[0])
            if (props.onChange) {
              props.onChange(e)

            }

          }

          }
          type="file"
        />
      </div>
    </div>
  )
};


export { FileInputProps, FileInput };
