import React from 'react';
import 'react-calendar/dist/Calendar.css';
import "react-datepicker/dist/react-datepicker.css";
interface CalendarInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    ryImage: any;
    ryShowIcon?: boolean;
    ryIcon?: string;
    ryLabel?: string;
    ryType?: string;
    ryDateOnChange: any;
    ryDateValue: Date;
}
declare const CalendarInput: React.FC<CalendarInputProps>;
export { CalendarInputProps, CalendarInput };
