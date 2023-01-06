import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    ryImage?: any;
    ryShowIcon?: boolean;
    ryIcon?: string;
    rylabel?: string;
    ryType?: string;
}
declare const InputTypeAWithoutIcon: React.FC<InputProps>;
export { InputProps, InputTypeAWithoutIcon };
