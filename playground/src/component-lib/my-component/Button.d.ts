import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    ryButtonText: string;
    ryButtonType: any;
    ryButtonSize: any;
    ryIcon?: any;
    ryIconSize?: any;
    ryContainerStyle?: Object;
    ryContainerClassname?: any;
    ryShowOnlyIcon?: boolean;
    ryContainerAlignSelf?: "flex-start" | "flex-end" | "center";
}
declare const Button: React.FC<ButtonProps>;
export { ButtonProps, Button };
