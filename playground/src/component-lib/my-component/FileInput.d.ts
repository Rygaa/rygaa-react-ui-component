import React from 'react';
interface FileInputProps extends React.HTMLAttributes<HTMLElement> {
    ryImage: string;
    ryShowIcon?: boolean;
    ryIcon?: string;
    ryLabel?: string;
    ryColor?: string;
    ryExistingFile?: string;
    ryLink?: string;
}
declare const FileInput: React.FC<FileInputProps>;
export { FileInputProps, FileInput };
