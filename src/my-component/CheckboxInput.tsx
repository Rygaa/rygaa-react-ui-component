import React from 'react';
import classes from '../assets/inputs/CheckboxInput.module.scss';
import checkICON from './check.png';

interface CheckboxInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  ryImage?: any;
  ryShowIcon?: boolean;
  ryIcon?: string;
  ryText?: string;
}

const CheckboxInput: React.FC<CheckboxInputProps> = props => {
  return (
    <div className={classes['ry-root-checkboxinputt']} {...props}>
      <div className={classes['ry-box-checkboxinputt']}>
        {props.value ? <img src={checkICON} /> : null}
      </div>
      <p className={classes['ry-text-checkboxinputt']}>{props.ryText}</p>
    </div>
  );
};

export { CheckboxInputProps, CheckboxInput };
