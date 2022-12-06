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
    ryContainerAlignSelf?: 'flex-start' | 'flex-end' | 'center';
}
declare const ButtonTypeAWithIcon: React.FC<ButtonProps>;
export { ButtonProps, ButtonTypeAWithIcon };
