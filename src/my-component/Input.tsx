import React from 'react';
import classes from "./Input.module.scss";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ryImage: any;
  ryShowIcon?: boolean;
  ryIcon?: string;
  ryLabel?: string,
  ryType?: string,
}

const Input: React.FC<InputProps> = ({ ryShowIcon, ryType, ryLabel, ryIcon, ryImage, ...props }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(new Date());

  function x() {
    if (ryType == "calendar") {
      if (props.onChange && props.value) {
        return <div>
          {open && <Calendar className={classes['calendar']} onChange={(e: any) => { console.log(e) }} value={value} />}
          <button onClick={() => setOpen(!open)}>Open Calendar</button>
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
      {ryLabel && (<p>{ryLabel}aissa11</p>)}
      <div className={ryImage ? classes['container'] : classes['container-without']}>
        {ryImage}
        {x()}
      </div>
    </div>
  );
};


export { InputProps, Input };
