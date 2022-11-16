import React from 'react';
import classes from '../assets/buttons/Dropdown.module.scss';

interface DropdownProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  ryText: string;
  ryShowIcon?: boolean;
  ryIcon?: string;
  ryAlign?: string;
  ryStyle?: Object;
  before?: any;
  after?: any;
}

const Dropdown: React.FC<DropdownProps> = ({
  ryShowIcon,
  ryStyle,
  ryAlign,
  ryIcon,
  ryText,
  ...props
}) => {
  // const [open, setOpen] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  return (
    <div
      className={classes['divv']}
      onBlur={() => {
        console.log('blur');
        setOpen(false);
      }}
      tabIndex={0}
    >
      <div
        onClick={e => {
          setOpen(true);
        }}
        className={classes['x']}
      >
        {props.before}
      </div>
      {open === true && (
        <div className={classes['after']} onMouseDown={e => e.preventDefault()}>
          {props.children}
        </div>
      )}
    </div>
  );
};

export { DropdownProps, Dropdown };
