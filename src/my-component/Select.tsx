import React from 'react';
import classes from './Select.module.scss';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  ryText: string;
  ryShowIcon?: boolean;
  ryIcon?: string;
  ryAlign?: string;
  ryStyle?: Object;
  ryLabel?: string;
}

const Select: React.FC<SelectProps> = ({
  ryShowIcon,
  ryLabel,
  ryStyle,
  ryAlign,
  ryIcon,
  ryText,
  ...props
}) => {
  return (
    <div className={classes['big-container']}>
      {ryLabel && <p>{ryLabel}</p>}
      <select
        onChange={e => {
          if (props.onChange) {
            props.onChange(e);
          }
        }}
        className={classes['select']}
      >
        {props.children}
      </select>
    </div>
  );
};

export { SelectProps, Select };
