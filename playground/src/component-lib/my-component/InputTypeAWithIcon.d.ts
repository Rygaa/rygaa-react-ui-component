import React from 'react';
interface InputWithImageProps extends React.InputHTMLAttributes<HTMLInputElement> {
    ryimage: any;
    ryframermotionAnimate?: any;
    ryframermotionInitial?: any;
    ryframermotionTransition?: any;
    ryShowIcon?: boolean;
    ryIcon?: string;
    rylabel?: string;
    ryType?: string;
}
declare const InputTypeAWithIcon: React.FC<InputWithImageProps>;
export { InputWithImageProps, InputTypeAWithIcon };
