import React from 'react';
import classes from '../assets/inputs/Select.module.scss';
import Selectt from 'react-select';

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

const Select: React.FC<SelectProps> = ({ ...props }) => {
  return (
    <div className={classes['ry-root-input']}>
      {props.rylabel && (
        <p className={classes['ry-label-input']}>{props.rylabel}</p>
      )}
      <Selectt
        value={props.ryoptions.find((el: any) => {
          return el.value === props.rydefaultvalue;
        })}
        className={classes['select']}
        options={props.ryoptions}
        onChange={props.ryonChange}
        placeholder={props.ryplaceholder}
      />
    </div>
  );
};

export { SelectProps, Select };
