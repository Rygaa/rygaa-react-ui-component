import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    ryButtonText: string;
    ryButtonType: any;
    ryButtonSize: any;
    ryIcon?: any;
    ryContainerStyle?: Object;
    ryContainerClassname?: any;
}
declare const ButtonV2: React.FC<ButtonProps>;
export { ButtonProps, ButtonV2 };
