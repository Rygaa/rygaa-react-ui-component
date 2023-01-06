import React from 'react';
import classes from '../assets/inputs/ColorInput.module.scss';
import { HexColorPicker } from 'react-colorful';
import { InputTypeAWithoutIcon } from './InputTypeAWithoutIcon';
import { ButtonTypeAWithoutIcon } from './ButtonTypeAWithoutIcon';
import { Modal } from './Modal';

interface ColorInputProps extends React.ButtonHTMLAttributes<HTMLElement> {
  ryImage: HTMLElement;
  ryShowIcon?: boolean;
  ryIcon?: string;
  ryLabel?: string;
  ryColor?: string;
}

const ColorInput: React.FC<ColorInputProps> = ({
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

  const [colorPickerOpen, setColorPickerOpen] = React.useState<Boolean>(false);
  const [color, setColor] = React.useState(
    props.color ? props.color : '#808080'
  );
  const [selectedColor, setSelectedColor] = React.useState(
    props.color ? true : false
  );

  const [inputedColor, setInputedColor] = React.useState('#FFFFFF');

  React.useEffect(() => {
    if (props.color) {
      // setColor(props.color);
      setSelectedColor(true);
    }
  }, [props.color]);

  const colors = [
    '#000000',
    '#FFFFFF',
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#00FFFF',
    '#FF00FF',
    '#C0C0C0',
    '#808080',
    '#800000',
    '#008000',
    '#000080',
    '#808000',
    '#800080',
    '#008080',
    '#FFC0CB',
    '#FFA07A',
    '#20B2AA',
    '#87CEEB',
    '#778899',
    '#B0C4DE',
    '#ADD8E6',
    '#F08080',
    '#E0FFFF',
  ];

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
        <Modal
          ryOpen={colorPickerOpen}
          ryClass={classes['modal']}
          ryClose={() => setColorPickerOpen(false)}
        >
          <header></header>
          <main>
            <div className={classes['color-picker-container']}>
              <div>
                {colors.map(el => (
                  <div
                    onClick={() => {
                      setInputedColor(el);
                    }}
                    style={{
                      backgroundColor: el,
                      width: '1.5rem',
                      height: '1.5rem',
                    }}
                    className={
                      el == inputedColor
                        ? classes['color-boxx-selected']
                        : classes['color-box']
                    }
                  />
                ))}
              </div>
              <InputTypeAWithoutIcon
                value={inputedColor}
                onChange={e => {
                  setInputedColor(e.target.value);
                }}
                placeholder={'Enter a date'}
              />

              <ButtonTypeAWithoutIcon
                onClick={() => {
                  const isColorInACorrectFormat =
                    /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(inputedColor);
                  if (isColorInACorrectFormat) {
                    x(inputedColor);
                    setColorPickerOpen(false);
                  }
                }}
                ryButtonText={'Save'}
                ryButtonType={'primary'}
                ryButtonSize={'size5'}
              />
              <ButtonTypeAWithoutIcon
                onClick={() => setColorPickerOpen(false)}
                ryButtonText={'Close'}
                ryButtonType={'danger'}
                ryButtonSize={'size5'}
              />
            </div>
          </main>
          <footer></footer>
        </Modal>
      </div>
    </div>
  );
};

export { ColorInputProps, ColorInput };
