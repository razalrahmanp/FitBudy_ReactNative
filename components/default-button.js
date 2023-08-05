import { useMemo } from "react";

const DefaultButton = ({
  buttonText,
  defaultButtonPosition,
  defaultButtonTop,
  defaultButtonLeft,
  defaultButtonWidth,
  defaultButtonHeight,
  defaultButtonRight,
  defaultButtonBottom,
  buttonTextLeft,
  buttonTextColor,
}) => {
  const defaultButtonStyle = useMemo(() => {
    return {
      position: defaultButtonPosition,
      top: defaultButtonTop,
      left: defaultButtonLeft,
      width: defaultButtonWidth,
      height: defaultButtonHeight,
      right: defaultButtonRight,
      bottom: defaultButtonBottom,
    };
  }, [
    defaultButtonPosition,
    defaultButtonTop,
    defaultButtonLeft,
    defaultButtonWidth,
    defaultButtonHeight,
    defaultButtonRight,
    defaultButtonBottom,
  ]);

  const buttonTextStyle = useMemo(() => {
    return {
      left: buttonTextLeft,
      color: buttonTextColor,
    };
  }, [buttonTextLeft, buttonTextColor]);

  return (
    <div
      className="relative w-[263px] h-[50px] text-center text-mid text-white font-body-regular"
      style={defaultButtonStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl bg-primary" />
      <div
        className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_47.5px)] font-semibold"
        style={buttonTextStyle}
      >
        {buttonText}
      </div>
    </div>
  );
};

export default DefaultButton;
