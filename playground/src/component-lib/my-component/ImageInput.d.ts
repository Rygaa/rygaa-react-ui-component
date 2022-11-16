import React from 'react';
interface ImageInputProps extends React.HTMLAttributes<HTMLElement> {
    ryImage: string;
    ryShowIcon?: boolean;
    ryIcon?: string;
    ryLabel?: string;
    ryColor?: string;
    ryExistingFile?: string;
    ryLink?: string;
}
declare const ImageInput: React.FC<ImageInputProps>;
export { ImageInputProps, ImageInput };
