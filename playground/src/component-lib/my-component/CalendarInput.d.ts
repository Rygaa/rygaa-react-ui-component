import React from 'react';
interface CalendarInputProps extends React.HTMLAttributes<HTMLDivElement> {
    ryimage: any;
    ryShowIcon?: boolean;
    ryIcon?: string;
    rylabel?: string;
    ryType?: string;
    ryDateOnChange: any;
    ryDateValue: string;
}
declare const CalendarInput: React.FC<CalendarInputProps>;
export { CalendarInputProps, CalendarInput };
