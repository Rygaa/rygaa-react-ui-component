import React from 'react';
interface DropdownProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
    ryText: string;
    ryShowIcon?: boolean;
    ryIcon?: string;
    ryAlign?: string;
    ryStyle?: Object;
    before?: any;
    after?: any;
}
declare const Dropdown: React.FC<DropdownProps>;
export { DropdownProps, Dropdown };
