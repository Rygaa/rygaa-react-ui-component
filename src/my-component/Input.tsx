import React from 'react';
import classes from '../assets/inputs/Input.module.scss';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ryImage: any;
  ryShowIcon?: boolean;
  ryIcon?: string;
  ryLabel?: string;
  ryType?: string;
}

const Input: React.FC<InputProps> = props => {
  return (
    <div className={classes['ry-root-input']}>
      {props.ryLabel && (
        <p className={classes['ry-label-input']}>{props.ryLabel}</p>
      )}
      <input className={classes['ry-input-without-image']} {...props} />
    </div>
  );
};

export { InputProps, Input };
