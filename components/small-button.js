import { useMemo } from "react";

const SmallButton = ({
  buttonText,
  iconImageUrl,
  showChevronRightIcon,
  smallButtonPosition,
  smallButtonTop,
  smallButtonLeft,
  smallButtonCursor,
  smallButtonBorder,
  smallButtonWidth,
  signUpColor,
  signUpDisplay,
  onSmallButtonContainerClick,
}) => {
  const smallButtonStyle = useMemo(() => {
    return {
      position: smallButtonPosition,
      top: smallButtonTop,
      left: smallButtonLeft,
      cursor: smallButtonCursor,
      border: smallButtonBorder,
      width: smallButtonWidth,
    };
  }, [
    smallButtonPosition,
    smallButtonTop,
    smallButtonLeft,
    smallButtonCursor,
    smallButtonBorder,
    smallButtonWidth,
  ]);

  const signUpStyle = useMemo(() => {
    return {
      color: signUpColor,
      display: signUpDisplay,
    };
  }, [signUpColor, signUpDisplay]);

  return (
    <div
      className="relative rounded-29xl bg-primary flex flex-row py-[13px] pr-5 pl-7 items-center justify-center text-center text-mid text-white font-body-regular"
      style={smallButtonStyle}
      onClick={onSmallButtonContainerClick}
    >
      <div className="flex flex-row items-start justify-start gap-[8px]">
        <div className="relative font-semibold" style={signUpStyle}>
          {buttonText}
        </div>
        {showChevronRightIcon && (
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src={iconImageUrl}
          />
        )}
      </div>
    </div>
  );
};

export default SmallButton;
