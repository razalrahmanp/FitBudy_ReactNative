import { useMemo } from "react";

const Card1 = ({
  exerciseImageSize,
  exerciseTitle,
  exerciseTime,
  showProBadge,
  card1Position,
  card1Width,
  card1Height,
  card1Top,
  card1Right,
  card1Bottom,
  card1Left,
  vectorBackgroundColor,
  subtitleColor,
  rectangleDivBackgroundColor,
}) => {
  const card1Style = useMemo(() => {
    return {
      position: card1Position,
      width: card1Width,
      height: card1Height,
      top: card1Top,
      right: card1Right,
      bottom: card1Bottom,
      left: card1Left,
    };
  }, [
    card1Position,
    card1Width,
    card1Height,
    card1Top,
    card1Right,
    card1Bottom,
    card1Left,
  ]);

  const vectorStyle = useMemo(() => {
    return {
      backgroundColor: vectorBackgroundColor,
    };
  }, [vectorBackgroundColor]);

  const subtitle1Style = useMemo(() => {
    return {
      color: subtitleColor,
    };
  }, [subtitleColor]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  return (
    <div
      className="relative w-[311px] h-40 text-left text-mid text-white font-body-regular"
      style={card1Style}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={exerciseImageSize}
        />
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl [background:linear-gradient(180deg,_rgba(17,_17,_18,_0),_rgba(17,_17,_18,_0.6))]" />
      </div>
      <div className="absolute bottom-[16px] left-[16px] h-[41px] flex flex-col items-start justify-end gap-[4px]">
        <div className="relative font-semibold">{exerciseTitle}</div>
        <div className="flex flex-row items-center justify-start gap-[5px] text-smi">
          <div
            className="relative bg-primary w-[11px] h-0.5 [transform:_rotate(-90deg)] [transform-origin:0_0]"
            style={vectorStyle}
          />
          <div className="relative leading-[16px]" style={subtitle1Style}>
            {exerciseTime}
          </div>
        </div>
      </div>
      {showProBadge && (
        <div className="absolute right-[16px] bottom-[16px] w-[33px] h-4 text-2xs">
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-premium"
            style={rectangleDivStyle}
          />
          <b className="absolute top-[6.25%] left-[15.15%] leading-[13px]">
            PRO
          </b>
        </div>
      )}
    </div>
  );
};

export default Card1;
