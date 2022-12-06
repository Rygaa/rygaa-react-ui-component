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
}

const Select: React.FC<SelectProps> = ({ ...props }) => {
  return (
    <Selectt
      defaultValue={props.ryoptions.filter(
        ({ value }: any) => value === props.rydefaultvalue
      )}
      className={classes['select']}
      options={props.ryoptions}
      onChange={props.ryonChange}
      placeholder={props.ryplaceholder}
    />
  );
};

export { SelectProps, Select };
