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
  ryClass?: any;
  ryShowOnlyIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  ryShowIcon,
  ryShowOnlyIcon,
  rySize,
  ryType,
  ryContainerStyle,
  ryClass,
  ryAlign,
  ryIcon,
  ryText,
  ...props
}) => {
  const stylee = ryAlign ? { alignSelf: 'flex-end' } : {};
  const containerOnClick = (e: any) => {
    if (e.target === e.currentTarget) {
      props.onClick && props.onClick(e);
    }
  };

  const ButtonWithIcon = (
    <div
      style={{ ...ryContainerStyle, ...stylee }}
      className={classNameGenerator(ryType, rySize, ryClass, ryShowIcon)}
      onClick={containerOnClick}
    >
      <div className={classes['icon-container']}>{ryIcon}</div>
      {!ryShowOnlyIcon && <button {...props}>{ryText}</button>}
    </div>
  );

  const ButtonWithoutIcon = (
    <div
      style={{ ...ryContainerStyle, ...stylee }}
      className={classNameGenerator(ryType, rySize, ryClass, ryShowIcon)}
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
  ryClass?: any,
  ryShowIcon?: boolean
) => {
  const x = ryShowIcon
    ? [classes['container-with-icon']]
    : [classes['container-without-icon']];
  x.push(ryClass);
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

  return classNames(x);
};

export { ButtonProps, Button };
