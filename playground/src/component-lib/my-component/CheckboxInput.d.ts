import React from 'react';
interface CheckboxInputProps extends React.ButtonHTMLAttributes<HTMLInputElement> {
    ryImage: HTMLElement;
    ryShowIcon?: boolean;
    ryIcon?: string;
}
declare const CheckboxInput: React.FC<CheckboxInputProps>;
export { CheckboxInputProps, CheckboxInput };
