import React from 'react';
import classes from './Modal.module.scss';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  ryImage: HTMLElement;
  ryShowIcon?: boolean;
  ryIcon?: string;
  ryLabel?: string;
  ryOpen?: false;
  ryClass: any;
}

const Modal: React.FC<ModalProps> = ({
  ryShowIcon,
  ryLabel,
  ryIcon,
  ryOpen,
  ryClass,
  ...props
}) => {
  return ryOpen ? (
    <div className={ryClass}>
      <div>{props.children}</div>
      <div
        onClick={e => {
          if (props.onClick) {
            props.onClick(e);
          }
        }}
      ></div>
    </div>
  ) : null;
};

export { ModalProps, Modal };
