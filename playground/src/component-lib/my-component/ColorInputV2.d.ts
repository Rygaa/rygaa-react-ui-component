import React from 'react';
interface ColorInputPropsV2 extends React.ButtonHTMLAttributes<HTMLElement> {
    ryImage: HTMLElement;
    ryShowIcon?: boolean;
    ryIcon?: string;
    ryLabel?: string;
    ryColor?: string;
}
declare const ColorInputV2: React.FC<ColorInputPropsV2>;
export { ColorInputPropsV2, ColorInputV2 };
