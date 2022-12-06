import React from 'react';
interface PageProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
    containerClassname: any;
    rycenter: boolean;
    rypadding: boolean;
    doeshover: boolean;
}
declare const PaperA: React.FC<PageProps>;
export { PageProps, PaperA };
