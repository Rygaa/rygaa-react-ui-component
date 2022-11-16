import React from 'react';
import classes from '../assets/inputs/InputWithImage.module.scss';
interface InputWithImageProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ryImage: any;
  ryShowIcon?: boolean;
  ryIcon?: string;
  ryLabel?: string;
  ryType?: string;
}

const InputWithImage: React.FC<InputWithImageProps> = props => {
  return (
    <div className={classes['ry-root-input']}>
      {props.ryLabel && (<p className={classes['ry-label-input']}>{props.ryLabel}</p>)}
      <div className={classes['ry-container-input']}>
        {props.ryImage}
        {<input {...props} />}
      </div>
    </div>
  );
};

export { InputWithImageProps, InputWithImage };
