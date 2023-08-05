import { useMemo } from "react";

const CardWithTitle = ({
  imageDimensions,
  showProBadge,
  cardWithTitlePosition,
  cardWithTitleWidth,
  cardWithTitleTop,
  cardWithTitleLeft,
  subtitleColor,
  textLinkLeft,
  showProBadge1,
}) => {
  const cardWithTitleStyle = useMemo(() => {
    return {
      position: cardWithTitlePosition,
      width: cardWithTitleWidth,
      top: cardWithTitleTop,
      left: cardWithTitleLeft,
    };
  }, [
    cardWithTitlePosition,
    cardWithTitleWidth,
    cardWithTitleTop,
    cardWithTitleLeft,
  ]);

  const subtitleStyle = useMemo(() => {
    return {
      color: subtitleColor,
    };
  }, [subtitleColor]);

  const textLinkStyle = useMemo(() => {
    return {
      left: textLinkLeft,
    };
  }, [textLinkLeft]);

  return (
    <div
      className="relative w-[311px] h-[197px] text-left text-mid text-white font-body-regular"
      style={cardWithTitleStyle}
    >
      <div className="absolute h-[81.22%] w-full top-[18.78%] right-[0%] bottom-[0%] left-[0%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={imageDimensions}
          />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl [background:linear-gradient(180deg,_rgba(17,_17,_18,_0),_rgba(17,_17,_18,_0.6))]" />
        </div>
        <div className="absolute bottom-[16px] left-[16px] h-[41px] flex flex-col items-start justify-end gap-[4px]">
          <div className="relative font-semibold">Day 01 - Warm Up</div>
          <div className="flex flex-row items-center justify-start gap-[5px] text-smi">
            <div className="relative bg-primary w-[11px] h-0.5 [transform:_rotate(-90deg)] [transform-origin:0_0]" />
            <div className="relative leading-[16px]" style={subtitleStyle}>
              07:00 - 08:00 AM
            </div>
          </div>
        </div>
        {showProBadge && (
          <div className="absolute right-[16px] bottom-[16px] w-[33px] h-4 text-2xs">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-premium" />
            <b className="absolute top-[6.25%] left-[15.15%] leading-[13px]">
              PRO
            </b>
          </div>
        )}
      </div>
      <div className="absolute top-[0%] left-[0%] font-semibold">
        Today Workout Plan
      </div>
      <div
        className="absolute top-[2.03%] left-[77.17%] text-smi leading-[16px] text-primary text-right"
        style={textLinkStyle}
      >
        Mon 26 Apr
      </div>
    </div>
  );
};

export default CardWithTitle;
