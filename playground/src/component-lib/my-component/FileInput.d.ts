import React from 'react';
interface FileInputProps extends React.ButtonHTMLAttributes<HTMLElement> {
    ryImage: string;
    ryShowIcon?: boolean;
    ryIcon?: string;
    ryLabel?: string;
    ryColor?: string;
}
declare const FileInput: React.FC<FileInputProps>;
export { FileInputProps, FileInput };
