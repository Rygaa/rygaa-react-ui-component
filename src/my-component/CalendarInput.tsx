import React from 'react';
import classes from "./CalendarInput.module.scss";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
interface CalendarInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ryImage: any;
  ryShowIcon?: boolean;
  ryIcon?: string;
  ryLabel?: string,
  ryType?: string,
  ryDateOnChange: any;
  ryDateValue: Date;
}

const CalendarInput: React.FC<CalendarInputProps> = ({ ryShowIcon, ryDateOnChange, ryDateValue, ryType, ryLabel, ryIcon, ryImage, ...props }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(new Date());

  function x() {
    if (ryType == "calendar") {
      if (props.onChange && props.value) {
        return <div>
          {open && <DatePicker className={classes['calendar']} onChange={(e: any) => { console.log(e) }} selected={value} />}
          <button onClick={() => setOpen(!open)}>Open Calendear</button>
        </div>
      }
    } else {
      return <input className={ryImage ? classes['inputt'] : classes['inputt-without']}  {...props} />
    }
  }

  // React.useEffect(() => {
  //   if (props.onChange) {
  //     console.log(value)
  //     // props.onChange(value)
  //   }
  // }, [value])

  return (
    <div className={classes['big-container']}>
      {ryLabel && (<p>{ryLabel}</p>)}
      <div className={ryImage ? classes['container'] : classes['container-without']}>
        {ryImage}
        <DatePicker className={classes['datepicker-input']} calendarClassName={classes['test01']} onChange={(e: any) => { console.log(e) }} selected={value} />
      </div>
    </div>
  );
};


export { CalendarInputProps, CalendarInput };
