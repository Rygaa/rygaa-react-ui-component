import React from 'react';
import classes from "./Page.module.scss";

interface PageProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  ryTitle: string,
  ryAside: HTMLElement,
  ryPrincipal: HTMLElement
}

const Page: React.FC<PageProps> = ({ ryTitle, ryAside, ryPrincipal, ...props }) => {
  return (
    <div className={classes['container']}>
      <p>{ryTitle}</p>
      <div className={classes['main1']}>
          {props.children}
      </div>
    </div>
  );
};


export { PageProps, Page };
