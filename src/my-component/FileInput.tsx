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
  ryDefaultValue?: string;
}

const FileInput: React.FC<FileInputProps> = ({
  ryLink,
  ryExistingFile,
  ryColor,
  ryShowIcon,
  rylabel,
  ryIcon,
  ryImage,
  ryDefaultValue,
  ...props
}) => {
  //  const inputRef: React.Ref = React.useRef(null) ;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [updated, setUpdated] = React.useState('');
  return (
    <div className={classes['ry-root-fileinput']} style={props.style}>
      {rylabel && <p className={classes['ry-label-fileinput']}>{rylabel}</p>}

      <div className={classes['ry-container-fileinput']}>
        <button
          style={{ cursor: 'pointer' }}
          onClick={() => {
            if (inputRef && inputRef.current) {
              inputRef.current.click();
            }
          }}
        >
          Upload File&nbsp;
          <span style={{ color: 'rgba(0,0,0,.5)' }}>
            "{updated ? updated : 'No File'}"
          </span>
        </button>
        {ryExistingFile !== 'No file' && (
          <a href={ryLink}>
            <span>Download&nbsp;</span>
            {ryExistingFile}
          </a>
        )}

        <input
          ref={inputRef}
          style={{ display: 'none' }}
          onChange={(e: any) => {
            // props.onChange(inputRef.current.files[0])
            setUpdated(e.target.files[0].name);
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
