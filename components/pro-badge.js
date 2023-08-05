import { useMemo } from "react";

const ProBadge = ({
  rating,
  proBadgePosition,
  proBadgeWidth,
  proBadgeHeight,
  proBadgeTop,
  proBadgeRight,
  proBadgeBottom,
  proBadgeLeft,
  rectangleDivBackgroundColor,
  titleLeft,
  titleColor,
  titleTextAlign,
}) => {
  const proBadgeStyle = useMemo(() => {
    return {
      position: proBadgePosition,
      width: proBadgeWidth,
      height: proBadgeHeight,
      top: proBadgeTop,
      right: proBadgeRight,
      bottom: proBadgeBottom,
      left: proBadgeLeft,
    };
  }, [
    proBadgePosition,
    proBadgeWidth,
    proBadgeHeight,
    proBadgeTop,
    proBadgeRight,
    proBadgeBottom,
    proBadgeLeft,
  ]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const title2Style = useMemo(() => {
    return {
      left: titleLeft,
      color: titleColor,
      textAlign: titleTextAlign,
    };
  }, [titleLeft, titleColor, titleTextAlign]);

  return (
    <div
      className="relative w-[33px] h-4 text-left text-2xs text-white font-body-regular"
      style={proBadgeStyle}
    >
      <div
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-premium"
        style={rectangleDiv1Style}
      />
      <b
        className="absolute top-[6.25%] left-[15.15%] leading-[13px]"
        style={title2Style}
      >
        {rating}
      </b>
    </div>
  );
};

export default ProBadge;
