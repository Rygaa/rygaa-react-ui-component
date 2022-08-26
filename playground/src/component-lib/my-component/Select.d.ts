import React from 'react';
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    ryText: string;
    ryShowIcon?: boolean;
    ryIcon?: string;
    ryAlign?: string;
    ryStyle?: Object;
    ryLabel?: string;
}
declare const Select: React.FC<SelectProps>;
export { SelectProps, Select };
