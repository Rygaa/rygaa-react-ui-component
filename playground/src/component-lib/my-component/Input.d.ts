import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    ryImage: any;
    ryShowIcon?: boolean;
    ryIcon?: string;
    ryLabel?: string;
    ryType?: string;
}
declare const Input: React.FC<InputProps>;
export { InputProps, Input };
