import React from 'react';
import classes from '../assets/inputs/Modal.module.scss';
import { motion } from 'framer-motion';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  ryShowIcon?: boolean;
  ryIcon?: string;
  ryLabel?: string;
  ryOpen?: Boolean;
  ryClass: any;
  ryClose?: any;
  ryframermotionAnimate?: any;
  ryframermotionInitial?: any;
  ryframermotionTransition?: any;
}

const Modal: React.FC<ModalProps> = ({
  ryShowIcon,
  ryLabel,
  ryIcon,
  ryOpen,
  ...props
}) => {
  return ryOpen ? (
    <motion.div className={props.ryClass}>
      <motion.div
        initial={{ y: '-200vh' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {props.children}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onClick={props.ryClose}
      ></motion.div>
    </motion.div>
  ) : null;
};

export { ModalProps, Modal };
