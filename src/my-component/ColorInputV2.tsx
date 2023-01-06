import React from 'react';
import classes from '../assets/inputs/ColorInput.module.scss';
import { HexColorPicker } from 'react-colorful';

interface ColorInputPropsV2 extends React.ButtonHTMLAttributes<HTMLElement> {
  ryImage: HTMLElement;
  ryShowIcon?: boolean;
  ryIcon?: string;
  ryLabel?: string;
  ryColor?: string;
}

const ColorInputV2: React.FC<ColorInputPropsV2> = ({
  ryColor,
  ryShowIcon,
  ryLabel,
  ryIcon,
  ryImage,
  ...props
}) => {
  const x = (e: any) => {
    if (props.onChange) {
      props.onChange(e);
    }
  };

  const [colorPickerOpen, setColorPickerOpen] = React.useState(false);
  const [color, setColor] = React.useState(
    props.color ? props.color : '#808080'
  );
  const [selectedColor, setSelectedColor] = React.useState(
    props.color ? true : false
  );

  React.useEffect(() => {
    if (props.color) {
      // setColor(props.color);
      setSelectedColor(true);
    }
  }, [props.color]);

  return (
    <div className={classes['ry-root-colorinputt']} style={props.style}>
      {ryLabel && <p className={classes['ry-label-colorinputt']}>{ryLabel}</p>}
      <div>
        <div
          style={{
            backgroundColor: `${props.color || color}`,
          }}
          onClick={() => {
            setColorPickerOpen(!colorPickerOpen);
          }}
          className={classes['color-input-container']}
        >
          {!colorPickerOpen && (
            <p>
              {selectedColor && color
                ? 'Change color'
                : 'No color is selected please select one'}
            </p>
          )}
        </div>

        {colorPickerOpen && (
          <div className={classes['color-picker-container']}>
            <HexColorPicker color={color} onChange={x} />
            <button onClick={() => setColorPickerOpen(false)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export { ColorInputPropsV2, ColorInputV2 };
