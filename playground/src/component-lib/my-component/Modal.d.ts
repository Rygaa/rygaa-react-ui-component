import React from 'react';
interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    ryImage: HTMLElement;
    ryShowIcon?: boolean;
    ryIcon?: string;
    ryLabel?: string;
    ryOpen?: false;
    ryClass: any;
    ryClose?: any;
}
declare const Modal: React.FC<ModalProps>;
export { ModalProps, Modal };
