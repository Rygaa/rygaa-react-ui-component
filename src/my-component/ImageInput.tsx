import React from 'react';
import classes from '../assets/inputs/Input.module.scss';

interface ImageInputProps extends React.HTMLAttributes<HTMLElement> {
  ryImage: string;
  ryShowIcon?: boolean;
  ryIcon?: string;
  ryLabel?: string;
  ryColor?: string;
  ryExistingFile?: string;
  ryLink?: string;
}

const ImageInput: React.FC<ImageInputProps> = ({
  ryLink,
  ryExistingFile,
  ryColor,
  ryShowIcon,
  ryLabel,
  ryIcon,
  ryImage,
  ...props
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className={classes['file-input-component']} style={props.style}>
      {ryLabel && <p className={classes['label-file-input']}>{ryLabel}</p>}

      <div className={classes['container-file-input']}>
        <img
          onClick={() => {
            if (inputRef && inputRef.current) {
              inputRef.current.click();
            }
          }}
          src={ryImage}
        >
          {ryExistingFile}
        </img>
        <input
          ref={inputRef}
          style={{ display: 'none' }}
          onChange={e => {
            // props.onChange(inputRef.current.files[0])
            if (props.onChange) {
              props.onChange(e);
            }
          }}
          type="file"
        />
      </div>
    </div>
  );
};

export { ImageInputProps, ImageInput };
