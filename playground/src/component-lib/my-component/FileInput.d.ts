import React from 'react';
interface FileInputProps extends React.HTMLAttributes<HTMLElement> {
    ryImage: string;
    ryShowIcon?: boolean;
    ryIcon?: string;
    rylabel?: string;
    ryColor?: string;
    ryExistingFile?: string;
    ryLink?: string;
    ryDefaultValue?: string;
}
declare const FileInput: React.FC<FileInputProps>;
export { FileInputProps, FileInput };
