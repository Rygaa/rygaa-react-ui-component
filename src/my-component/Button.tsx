import React from 'react';
import classes from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ryText: string;
  ryShowIcon?: boolean;
  ryIcon?: any;
  ryAlign?: string;
  ryContainerStyle?: Object;
  ryType?: string;
  rySize?: string;
  ryFontSize?: string;
  ryShowOnlyIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  ryShowIcon,
  ryShowOnlyIcon,
  ryFontSize,
  rySize,
  ryType,
  ryContainerStyle,
  ryAlign,
  ryIcon,
  ryText,
  ...props
}) => {
  const stylee = ryAlign ? { alignSelf: 'flex-end' } : {};
  const containerOnClick = (e: any) => {
    console.log('rinn');
    if (e.target === e.currentTarget) {
      props.onClick && props.onClick(e);
    }
  };

  const ButtonWithIcon = (
    <div
      style={{ ...ryContainerStyle, ...stylee }}
      className={classNameGenerator(ryType, rySize, ryFontSize)}
      onClick={containerOnClick}
    >
      {ryIcon}
      {!ryShowOnlyIcon && <button {...props}>{ryText}</button>}
    </div>
  );

  const ButtonWithoutIcon = (
    <div
      style={{ ...ryContainerStyle, ...stylee }}
      className={classNameGenerator(ryType, rySize, ryFontSize)}
      onClick={containerOnClick}
    >
      <button {...props}>{ryText}</button>
    </div>
  );

  return ryShowIcon ? ButtonWithIcon : ButtonWithoutIcon;
};

const classNameGenerator = (
  ryType?: string,
  rySize?: string,
  ryFontSize?: string
) => {
  const x = [classes['container']];
  switch (ryType) {
    case 'Primary':
      x.push(classes['primary']);
      break;
    case 'Secondary':
      x.push(classes['secondary']);
      break;
    case 'Danger':
      x.push(classes['danger']);
      break;
    case 'Warning':
      x.push(classes['warning']);
      break;
    default:
      x.push(classes['none']);
      break;
  }

  switch (rySize) {
    case 'size1':
      x.push(classes['size1']);
      break;

    case 'size2':
      x.push(classes['size2']);
      break;

    case 'size3':
      x.push(classes['size3']);
      break;

    case 'size4':
      x.push(classes['size4']);
      break;

    case 'size5':
      x.push(classes['size5']);
      break;

    default:
      break;
  }

  switch (ryFontSize) {
    case 'font-size1':
      x.push(classes['font-size1']);
      break;

    case 'font-size2':
      x.push(classes['font-size2']);
      break;

    case 'font-size3':
      x.push(classes['font-size3']);
      break;

    case 'font-size4':
      x.push(classes['font-size4']);
      break;

    case 'font-size5':
      x.push(classes['font-size5']);
      break;

    default:
      break;
  }

  return classNames(x);
};

export { ButtonProps, Button };
