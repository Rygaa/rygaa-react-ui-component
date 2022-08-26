import React from 'react';
import classes from "./Input.module.scss";

interface InputProps extends React.ButtonHTMLAttributes<HTMLInputElement> {
  ryImage: HTMLElement;
  ryShowIcon?: boolean;
  ryIcon?: string;
  ryLabel?: string,
}

const Input: React.FC<InputProps> = ({ ryShowIcon, ryLabel, ryIcon, ryImage, ...props }) => {


  const c1 = (
    <div className={classes['container']}>
        {ryImage}
        <input className={classes['inputt']}  {...props} />
    </div>
  )

  const c2 = (
    <div className={classes['container']}>
 
      <input className={classes['inputt']}  {...props} />
    </div>

  )

  return (
    <div className={classes['big-container']}>
      {ryLabel && (
        <p>{ryLabel}</p>
      )}
      <div className={classes['container']}>

      {
        ryImage
      }
      <input className={classes['inputt']}  {...props} />
      </div>


    </div>
  );
};


export { InputProps, Input };
