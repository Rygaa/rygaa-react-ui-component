import React from 'react';
import classes from '../assets/buttons/Button.module.scss';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ryButtonText: string;
  ryButtonType: any;
  ryButtonSize: any;
  ryIcon?: any;
  ryIconSize?: any;
  ryContainerStyle?: Object;
  ryContainerClassname?: any;
  ryShowOnlyIcon?: boolean;
  ryContainerAlignSelf?: 'flex-start' | 'flex-end' | 'center';
}

const Button: React.FC<ButtonProps> = ({
  ryButtonText,
  ryButtonType,
  ryButtonSize,
  ryIcon,
  ryContainerStyle,
  ryContainerClassname,
  ryShowOnlyIcon,
  ryIconSize,
  ryContainerAlignSelf = 'center',
  ...props
}) => {
  const containerOnClick = (event: any) => {
    // if (event.target === event.currentTarget) {
    props.onClick && props.onClick(event);
    // }
  };

  const containerOnClick1 = (event: any) => {
    if (event.target === event.currentTarget) {
      props.onClick && props.onClick(event);
    }
  };

  ryContainerStyle = ryContainerStyle ? ryContainerStyle : {};

  const ButtonWithIcon = (
    <div
      style={Object.assign(ryContainerStyle, {
        alignSelf: ryContainerAlignSelf,
      })}
      className={classNames([
        classes['container-with-icon'],
        props.className,
        classes[ryButtonType],
        classes[ryButtonSize],
      ])}
      onClick={containerOnClick1}
    >
      {ryIcon}
      <button {...props}>{ryButtonText}</button>
    </div>
  );

  const ButtonWithoutIcon = (
    <div
      style={Object.assign(ryContainerStyle, {
        alignSelf: ryContainerAlignSelf,
      })}
      className={classNames([
        classes['container-without-icon'],
        props.className,
        classes[ryButtonType],
        classes[ryButtonSize],
      ])}
      onClick={containerOnClick1}
    >
      <button {...props}>{ryButtonText}</button>
    </div>
  );

  const ButtonWithOnlyIcon = (
    <div
      style={Object.assign(ryContainerStyle, {
        alignSelf: ryContainerAlignSelf,
      })}
      className={classNames([
        classes['container-with-only-icon'],
        props.className,
        classes[ryButtonType],
        classes[ryButtonSize],
      ])}
      onClick={containerOnClick}
    >
      {ryIcon}
    </div>
  );

  const render = () => {
    if (ryShowOnlyIcon) {
      return ButtonWithOnlyIcon;
    } else {
      return <div>FDFDGRGERFGR</div>;
    }
  };

  return render();
};

export { ButtonProps, Button };
