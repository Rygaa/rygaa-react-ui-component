import React from 'react';
import classes from '../assets/buttons/ButtonTypeAWithoutIcon.module.scss';
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

const ButtonTypeAWithoutIcon: React.FC<ButtonProps> = ({
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
  const containerOnClick1 = (event: any) => {
    if (event.target === event.currentTarget) {
      props.onClick && props.onClick(event);
    }
  };

  ryContainerStyle = ryContainerStyle ? ryContainerStyle : {};

  return (
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
};

export { ButtonProps, ButtonTypeAWithoutIcon };
