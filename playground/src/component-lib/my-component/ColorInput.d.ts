import React from 'react';
interface ColorInputProps extends React.ButtonHTMLAttributes<HTMLElement> {
    ryImage: HTMLElement;
    ryShowIcon?: boolean;
    ryIcon?: string;
    ryLabel?: string;
    ryColor?: string;
}
declare const ColorInput: React.FC<ColorInputProps>;
export { ColorInputProps, ColorInput };
