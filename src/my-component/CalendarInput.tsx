import React from 'react';
import classes from "../assets/inputs/CalendarInput.module.scss";
interface CalendarInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  ryImage: any;
  ryShowIcon?: boolean;
  ryIcon?: string;
  ryLabel?: string,
  ryType?: string,
  ryDateOnChange: any;
  ryDateValue: string;
}

const days = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
  "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
  "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
  "31"
]

const months = [
  "Jan", //
  "Feb",
  "Mar", //
  "Apr", // 
  "May", //
  "Jul",
  "Jun", //
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec", // 
]

const CalendarInput: React.FC<CalendarInputProps> = ({ ryShowIcon, ryDateOnChange, ryDateValue, ryType, ryLabel, ryIcon, ryImage, ...props }) => {

  const [selectedDay, setSelectedDay] = React.useState(ryDateValue && ryDateValue.split(" ")[0]);
  const [selectedMonth, setSelectedMonth] = React.useState(ryDateValue && ryDateValue.split(" ")[1]);
  const [changed, setChanged] = React.useState(false);

  React.useEffect(() => {
    if (ryDateValue) {
      if (selectedDay !== ryDateValue.split(" ")[0] || selectedMonth !== ryDateValue.split(" ")[1]) {
        setChanged(true);
      }
      if (selectedDay !== "" && selectedMonth !== "" && changed) {
        ryDateOnChange(`${selectedDay} ${selectedMonth}`)
  
      }
    }

  }, [selectedDay, selectedMonth])

  React.useEffect(() => {
    if (changed == true) {
      ryDateOnChange(`${selectedDay} ${selectedMonth}`)
    }
  }, [changed])

  return (
    <div className={classes['ry-root-calendarinput']}>
      {ryLabel && (<p className={classes['ry-label-calendarinput']}>{ryLabel}</p>)}
      <div className={ryImage ? classes['ry-container-with-image-calendarinput'] : classes['ry-container-without-image-calendarinput']}>
        {ryImage}
        <select className={classes['ry-day-select-calendarinput']} onChange={(e) => setSelectedDay(e.target.value)}>
          <option selected={days[0] == selectedDay}>{days[0]}</option>

          {selectedMonth != "" && days.map((day, indexx) => {
            if (indexx > 0) {
              const index = months.findIndex((month) => month == selectedMonth);
              if (index == 0 || index == 2 || index == 4 || index == 6 || index == 7 || index == 9 || index == 11) {
                return <option selected={day == selectedDay}>{day}</option>
              }
              else if (index == 1) {
                return <option selected={day == selectedDay} disabled={day == "31" || day == "30" || day == "29"}>{day}</option>
              }
              else {
                return <option selected={day == selectedDay} disabled={day == "31"}>{day}</option>
              }
            }

          })}
        </select>
        <select className={classes['ry-month-select-calendarinput']} onChange={(e) => setSelectedMonth(e.target.value)}>
          {months.map((month) => <option selected={month == selectedMonth}>{month}</option>)}
        </select>
      </div>
    </div>
  );
};

export { CalendarInputProps, CalendarInput };
