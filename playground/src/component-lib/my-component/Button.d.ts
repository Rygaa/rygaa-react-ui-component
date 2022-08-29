import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    ryText: string;
    ryShowIcon?: boolean;
    ryIcon?: any;
    ryAlign?: string;
    ryContainerStyle?: Object;
    ryType?: string;
    rySize?: string;
    ryFontSize?: string;
    ryShowOnlyIcon?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export { ButtonProps, Button };
