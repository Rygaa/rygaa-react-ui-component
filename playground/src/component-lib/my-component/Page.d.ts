import React from 'react';
interface PageProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
    ryTitle: string;
    ryAside?: HTMLElement;
    ryPrincipal?: HTMLElement;
}
declare const Page: React.FC<PageProps>;
export { PageProps, Page };
