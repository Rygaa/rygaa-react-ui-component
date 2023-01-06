import React from 'react';
import classes from '../assets/inputs/CalendarInput.module.scss';
import Selectt from 'react-select';

interface CalendarInputProps extends React.HTMLAttributes<HTMLDivElement> {
  ryimage: any;
  ryShowIcon?: boolean;
  ryIcon?: string;
  rylabel?: string;
  ryType?: string;
  ryDateOnChange: any;
  ryDateValue: string;
}
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const CalendarInput: React.FC<CalendarInputProps> = ({
  ryShowIcon,
  ryDateOnChange,
  ryDateValue,
  ryType,
  rylabel,
  ryIcon,
  ryimage,
  ...props
}) => {
  const [selectedDay, setSelectedDay] = React.useState(
    ryDateValue ? ryDateValue.split(' ')[0] : 'Select'
  );
  const [selectedMonth, setSelectedMonth] = React.useState(
    ryDateValue ? ryDateValue.split(' ')[1] : 'Select'
  );

  React.useEffect(() => {
    console.log(`ryDateValue ${ryDateValue}`);
    console.log(`rylabel ${rylabel}`);
    console.log(ryDateValue && ryDateValue.split(' ')[1]);
    setSelectedMonth(ryDateValue ? ryDateValue.split(' ')[1] : 'Select');
    setSelectedDay(ryDateValue ? ryDateValue.split(' ')[0] : 'Select');
  }, [ryDateValue]);

  const monthsWith = ['4', '6', '9', '11'];
  // index == 1 ||
  // index == 3 ||
  // index == 5 ||
  // index == 7 ||
  // index == 8 ||
  // index == 10 ||
  // index == 12

  const months = [
    { value: 'Select', label: 'Select' },
    { value: '1', label: 'Jan' },
    { value: '2', label: 'Feb' },
    { value: '3', label: 'Mar' },
    { value: '4', label: 'Apr' },
    { value: '5', label: 'May' },
    { value: '6', label: 'Jul' },
    { value: '7', label: 'Jun' },
    { value: '8', label: 'Aug' },
    { value: '9', label: 'Sep' },
    { value: '10', label: 'Oct' },
    { value: '11', label: 'Nov' },
    { value: '12', label: 'Dec' },
  ];

  const [days, setDays] = React.useState([
    { value: 'Select', label: 'Select', disabled: true },
    { value: '1', label: '1', disabled: true },
    { value: '2', label: '2', disabled: true },
    { value: '3', label: '3', disabled: true },
    { value: '4', label: '4', disabled: true },
    { value: '5', label: '5', disabled: true },
    { value: '6', label: '6', disabled: true },
    { value: '7', label: '7', disabled: true },
    { value: '8', label: '8', disabled: true },
    { value: '9', label: '9', disabled: true },
    { value: '10', label: '10', disabled: true },
    { value: '11', label: '11', disabled: true },
    { value: '12', label: '12', disabled: true },
    { value: '14', label: '14', disabled: true },
    { value: '15', label: '15', disabled: true },
    { value: '16', label: '16', disabled: true },
    { value: '17', label: '17', disabled: true },
    { value: '18', label: '18', disabled: true },
    { value: '19', label: '19', disabled: true },
    { value: '20', label: '20', disabled: true },
    { value: '21', label: '21', disabled: true },
    { value: '22', label: '22', disabled: true },
    { value: '23', label: '23', disabled: true },
    { value: '24', label: '24', disabled: true },
    { value: '25', label: '25', disabled: true },
    { value: '26', label: '26', disabled: true },
    { value: '27', label: '27', disabled: true },
    { value: '28', label: '28', disabled: true },
    { value: '29', label: '29', disabled: true },
    { value: '30', label: '30', disabled: true },
    {
      value: '31',
      label: '31',
      disabled: monthsWith.find(el => el == selectedMonth),
    },
  ]);
  React.useEffect(() => {
    setDays([
      { value: 'Select', label: 'Select', disabled: false },
      { value: '1', label: '1', disabled: false },
      { value: '2', label: '2', disabled: false },
      { value: '3', label: '3', disabled: false },
      { value: '4', label: '4', disabled: false },
      { value: '5', label: '5', disabled: false },
      { value: '6', label: '6', disabled: false },
      { value: '7', label: '7', disabled: false },
      { value: '8', label: '8', disabled: false },
      { value: '9', label: '9', disabled: false },
      { value: '10', label: '10', disabled: false },
      { value: '11', label: '11', disabled: false },
      { value: '12', label: '12', disabled: false },
      { value: '14', label: '14', disabled: false },
      { value: '15', label: '15', disabled: false },
      { value: '16', label: '16', disabled: false },
      { value: '17', label: '17', disabled: false },
      { value: '18', label: '18', disabled: false },
      { value: '19', label: '19', disabled: false },
      { value: '20', label: '20', disabled: false },
      { value: '21', label: '21', disabled: false },
      { value: '22', label: '22', disabled: false },
      { value: '23', label: '23', disabled: false },
      { value: '24', label: '24', disabled: false },
      { value: '25', label: '25', disabled: false },
      { value: '26', label: '26', disabled: false },
      { value: '27', label: '27', disabled: false },
      { value: '28', label: '28', disabled: false },
      { value: '29', label: '29', disabled: false },
      {
        value: '30',
        label: '30',
        disabled: selectedMonth == '2',
      },
      {
        value: '31',
        label: '31',
        disabled:
          monthsWith.find(el => el == selectedMonth) || selectedMonth == '2',
      },
    ]);
  }, [selectedMonth]);

  const [changed, setChanged] = React.useState(false);

  React.useEffect(() => {
    if (
      changed == true &&
      selectedMonth !== 'Select' &&
      selectedDay !== 'Select'
    ) {
      ryDateOnChange(
        `${days[+selectedDay].value} ${months[+selectedMonth].value}`
      );
      setChanged(false);
    }
  }, [selectedDay, selectedMonth]);

  React.useEffect(() => {}, [changed]);

  return (
    <div className={classes['ry-root-calendarinput']}>
      {rylabel && (
        <p className={classes['ry-label-calendarinput']}>{rylabel}</p>
      )}
      <div
        className={
          ryimage
            ? classes['ry-container-with-image-calendarinput']
            : classes['ry-container-without-image-calendarinput']
        }
      >
        {ryimage}
        <Selectt
          className={classes['select']}
          options={days}
          defaultValue={days.find(el => selectedDay == el.value)}
          isOptionDisabled={(option: any) => option.disabled}
          onChange={(ee: any) => {
            setSelectedDay(ee.value);
            setChanged(true);
          }}
        />
        <Selectt
          className={classes['select']}
          options={months}
          defaultValue={months.find(el => selectedMonth == el.value)}
          onChange={(ee: any) => {
            setSelectedMonth(ee.value);
            setChanged(true);
          }}
        />

        {/* <select
          className={classes['ry-day-select-calendarinput']}
          onChange={e => {
            setSelectedDay(e.target.value);
          }}
          value={selectedDay}
        >
          <option disabled={true} value={days[0]}>
            {days[0]}
          </option>

          {selectedMonth != '' &&
            days.map((day, indexx) => {
              if (indexx > 0) {
                const index = months.findIndex(month => month == selectedMonth);
                if (
                  index == 1 ||
                  index == 3 ||
                  index == 5 ||
                  index == 7 ||
                  index == 8 ||
                  index == 10 ||
                  index == 12
                ) {
                  return (
                    <option key={Math.random()} value={day}>
                      {day}
                    </option>
                  );
                } else if (index == 1) {
                  return (
                    <option
                      key={Math.random()}
                      disabled={day == '31' || day == '30' || day == '29'}
                      value={day}
                    >
                      {day}
                    </option>
                  );
                } else {
                  return (
                    <option
                      key={Math.random()}
                      disabled={day == '31'}
                      value={day}
                    >
                      {day}
                    </option>
                  );
                }
              }
            })}
        </select>
        <select
          className={classes['ry-month-select-calendarinput']}
          onChange={e => setSelectedMonth(e.target.value)}
          value={selectedMonth}
        >
          {months.map(month => (
            <option
              disabled={month === months[0]}
              key={Math.random()}
              value={month}
            >
              {month}
            </option>
          ))}
        </select> */}
      </div>
    </div>
  );
};

export { CalendarInputProps, CalendarInput };
