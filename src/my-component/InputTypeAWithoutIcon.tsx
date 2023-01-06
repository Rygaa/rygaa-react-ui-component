import React from 'react';
import classes from '../assets/inputs/InputTypeAWithoutIcon.module.scss';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ryImage?: any;
  ryShowIcon?: boolean;
  ryIcon?: string;
  rylabel?: string;
  ryType?: string;
}

const InputTypeAWithoutIcon: React.FC<InputProps> = props => {
  return (
    <div className={classes['ry-root-input']}>
      {props.rylabel && (
        <p className={classes['ry-label-input']}>{props.rylabel}</p>
      )}
      <input className={classes['ry-input-without-image']} {...props} />
    </div>
  );
};

export { InputProps, InputTypeAWithoutIcon };
