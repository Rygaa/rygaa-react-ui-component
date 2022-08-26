import React from 'react';
interface InputProps extends React.ButtonHTMLAttributes<HTMLInputElement> {
    ryImage: HTMLElement;
    ryShowIcon?: boolean;
    ryIcon?: string;
    ryLabel?: string;
}
declare const Input: React.FC<InputProps>;
export { InputProps, Input };
