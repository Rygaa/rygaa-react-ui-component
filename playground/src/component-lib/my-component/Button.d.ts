import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    ryButtonText: string;
    ryButtonType: any;
    ryButtonSize: any;
    ryIcon?: any;
    ryContainerStyle?: Object;
    ryContainerClassname?: any;
    ryShowOnlyIcon?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export { ButtonProps, Button };
