import React from 'react';
import classes from '../assets/inputs/FileInput.module.scss';

interface FileInputProps extends React.HTMLAttributes<HTMLElement> {
  ryImage: string;
  ryShowIcon?: boolean;
  ryIcon?: string;
  rylabel?: string;
  ryColor?: string;
  ryExistingFile?: string;
  ryLink?: string;
}

const FileInput: React.FC<FileInputProps> = ({
  ryLink,
  ryExistingFile,
  ryColor,
  ryShowIcon,
  rylabel,
  ryIcon,
  ryImage,
  ...props
}) => {
  //  const inputRef: React.Ref = React.useRef(null) ;
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className={classes['ry-root-fileinput']} style={props.style}>
      {rylabel && <p className={classes['ry-label-fileinput']}>{rylabel}</p>}

      <div className={classes['ry-container-fileinput']}>
        <button
          onClick={() => {
            if (inputRef && inputRef.current) {
              inputRef.current.click();
            }
          }}
        >
          Upload File
        </button>
        {ryExistingFile !== "No file" && <a href={ryLink}><span>Download&nbsp;</span>{ryExistingFile}</a>}

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

export { FileInputProps, FileInput };
