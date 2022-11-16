import React from 'react';
interface CalendarInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    ryImage: any;
    ryShowIcon?: boolean;
    ryIcon?: string;
    ryLabel?: string;
    ryType?: string;
    ryDateOnChange: any;
    ryDateValue: string;
}
declare const CalendarInput: React.FC<CalendarInputProps>;
export { CalendarInputProps, CalendarInput };
