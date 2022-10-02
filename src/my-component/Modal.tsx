import React from 'react';
import classes from './Modal.module.scss';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  ryImage: HTMLElement;
  ryShowIcon?: boolean;
  ryIcon?: string;
  ryLabel?: string;
  ryOpen?: false;
  ryClass: any;
  ryClose?: any;
}

const Modal: React.FC<ModalProps> = ({
  ryShowIcon,
  ryLabel,
  ryIcon,
  ryOpen,
  ryClass,
  ryClose,
  ...props
}) => {
  return ryOpen ? (
    <div className={ryClass}>
      <div  >{props.children}</div>
      <div
        onClick={() => { console.log('rrr'); ryClose(); }}
      ></div>
    </div>
  ) : null;
};

export { ModalProps, Modal };
