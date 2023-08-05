import { useMemo } from "react";

const Point = ({ rating, pointPosition, pointTop, pointLeft, titleColor }) => {
  const pointStyle = useMemo(() => {
    return {
      position: pointPosition,
      top: pointTop,
      left: pointLeft,
    };
  }, [pointPosition, pointTop, pointLeft]);

  const title1Style = useMemo(() => {
    return {
      color: titleColor,
    };
  }, [titleColor]);

  return (
    <div
      className="relative w-[33px] h-4 text-center text-2xs text-white font-body-regular"
      style={pointStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-primary" />
        <b
          className="absolute top-[6.25%] left-[24.24%] leading-[13px]"
          style={title1Style}
        >
          {rating}
        </b>
      </div>
    </div>
  );
};

export default Point;
