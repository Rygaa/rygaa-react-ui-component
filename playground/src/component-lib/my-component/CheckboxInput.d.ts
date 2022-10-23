import React from 'react';
interface CheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    ryImage?: any;
    ryShowIcon?: boolean;
    ryIcon?: string;
}
declare const CheckboxInput: React.FC<CheckboxInputProps>;
export { CheckboxInputProps, CheckboxInput };
