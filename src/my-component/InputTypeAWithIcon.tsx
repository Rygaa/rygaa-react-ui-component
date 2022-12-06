import React from 'react';
import classes from '../assets/inputs/InputTypeAWithIcon.module.scss';
import { motion } from 'framer-motion';
interface InputWithImageProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  ryimage: any;
  ryframermotionAnimate?: any;
  ryframermotionInitial?: any;
  ryframermotionTransition?: any;
  ryShowIcon?: boolean;
  ryIcon?: string;
  rylabel?: string;
  ryType?: string;
}

const InputTypeAWithIcon: React.FC<InputWithImageProps> = props => {
  return (
    <motion.div
      animate={props.ryframermotionAnimate}
      initial={props.ryframermotionInitial}
      transition={props.ryframermotionTransition}
      className={classes['ry-root-input']}
    >
      {props.rylabel && (
        <p className={classes['ry-label-input']}>{props.rylabel}</p>
      )}
      <div className={classes['ry-container-input']}>
        {props.ryimage}
        {<input {...props} />}
      </div>
    </motion.div>
  );
};

export { InputWithImageProps, InputTypeAWithIcon };
