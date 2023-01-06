import React from 'react';
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    ryText: string;
    ryShowIcon?: boolean;
    ryIcon?: string;
    ryAlign?: string;
    ryStyle?: Object;
    rylabel?: string;
    ryoptions?: any;
    rydefaultvalue?: any;
    ryonChange?: any;
    ryplaceholder?: string;
    rydisabled?: boolean;
}
declare const Select: React.FC<SelectProps>;
export { SelectProps, Select };
