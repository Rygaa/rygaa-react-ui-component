import React from 'react';
import classes from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ryButtonText: string;
  ryButtonType: any;
  ryButtonSize: any;
  ryIcon?: any;
  ryContainerStyle?: Object;
  ryContainerClassname?: any;
  ryShowOnlyIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  ryButtonText,
  ryButtonType,
  ryButtonSize,
  ryIcon,
  ryContainerStyle,
  ryContainerClassname,
  ryShowOnlyIcon,
  ...props
}) => {

  const containerOnClick = (e: any) => {
    if (e.target === e.currentTarget) {
      props.onClick && props.onClick(e);
    }
  };

  const ButtonWithIcon = (
    <div
      style={ryContainerStyle}
      className={classNames([classes['container-with-icon'], props.className, ryButtonType, ryButtonSize])}
      onClick={containerOnClick}
    >
      <div className={classes['icon-container']}>{ryIcon}</div>
      {!ryShowOnlyIcon && <button {...props}>{ryButtonText}</button>}
    </div>
  );

  const ButtonWithoutIcon = (
    <div
      style={ryContainerStyle}
      className={classNames([classes['container-without-icon'], props.className, ryButtonType, ryButtonSize])}
      onClick={containerOnClick}
    >
      <button {...props}>{ryButtonText}</button>
    </div>
  );

  return !!ryIcon ? ButtonWithIcon : ButtonWithoutIcon;
};

export { ButtonProps, Button };
