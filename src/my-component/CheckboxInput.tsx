import React from 'react';
import classes from "./CheckboxInput.module.scss";
import checkICON from "./check.png";

interface CheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ryImage?: any;
  ryShowIcon?: boolean;
  ryIcon?: string;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ ryShowIcon, ryIcon, ryImage, ...props }) => {
  return (
    <div className={classes["container"]} {...props}>
      <div
        className={classes["Checkbox"]}
      >
        {props.value ? <img src={checkICON} /> : null}
      </div>
      {props.children}
    </div>
  );
};


export { CheckboxInputProps, CheckboxInput };
