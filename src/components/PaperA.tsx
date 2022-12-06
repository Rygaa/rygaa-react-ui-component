import classNames from 'classnames';
import React from 'react';
import classes from '../assets/PaperA.module.scss';

interface PageProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  containerClassname: any;
  rycenter: boolean;
  rypadding: boolean;
  doeshover: boolean;
}

const PaperA: React.FC<PageProps> = ({ containerClassname, ...props }) => {
  return (
    <div
      className={classNames(
        classes['container'],
        containerClassname,
        props.doeshover && classes['hover']
      )}
      {...props}
    >
      {props.children}
    </div>
  );
};

export { PageProps, PaperA };
