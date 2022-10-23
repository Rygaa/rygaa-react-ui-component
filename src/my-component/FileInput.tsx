import React from 'react';
import classes from "./Input.module.scss";

interface FileInputProps extends React.HTMLAttributes<HTMLElement> {
  ryImage: string;
  ryShowIcon?: boolean;
  ryIcon?: string;
  ryLabel?: string,
  ryColor?: string,
}

const FileInput: React.FC<FileInputProps> = ({ ryColor, ryShowIcon, ryLabel, ryIcon, ryImage, ...props }) => {
  //  const inputRef: React.Ref = React.useRef(null) ;
  // const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className={classes["file-input-component"]} style={props.style}>
      {ryLabel && (
        <p className={classes["label-file-input"]}>{ryLabel}</p>
      )}

      <div className={classes["container-file-input"]}>
        <img
          onClick={() => {
            // if (inputRef && inputRef.current) {
            // inputRef.current.click();
            const elem = document.getElementById("lol")
            if (elem !== null) {
              elem.click();
            }

            // }
          }}
          src={ryImage}
        ></img>
        <input
          id="lol"
          // ref={inputRef}
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
