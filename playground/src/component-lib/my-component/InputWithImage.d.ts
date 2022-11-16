import React from 'react';
interface InputWithImageProps extends React.InputHTMLAttributes<HTMLInputElement> {
    ryImage: any;
    ryShowIcon?: boolean;
    ryIcon?: string;
    ryLabel?: string;
    ryType?: string;
}
declare const InputWithImage: React.FC<InputWithImageProps>;
export { InputWithImageProps, InputWithImage };
