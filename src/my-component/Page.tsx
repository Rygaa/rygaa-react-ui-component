import React from 'react';
import classes from '../assets/inputs/Page.module.scss';

interface PageProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  ryTitle: string;
  ryAside?: HTMLElement;
  ryPrincipal?: HTMLElement;
}

const Page: React.FC<PageProps> = ({
  ryTitle,
  ryAside,
  ryPrincipal,
  ...props
}) => {
  return (
    <div
      className={
        ryTitle == ''
          ? classes['container-without-title']
          : classes['container']
      }
    >
      {ryTitle !== '' && <p>{ryTitle}</p>}
      <div className={classes['main-1']}>{props.children}</div>
    </div>
  );
};

export { PageProps, Page };
