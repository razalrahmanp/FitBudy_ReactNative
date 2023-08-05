import { useMemo } from "react";

const SmallCard = ({
  exerciseTitle,
  exerciseDuration,
  imageDimensions,
  exerciseDescription,
  smallCardPosition,
  smallCardWidth,
  smallCardTop,
  smallCardLeft,
  simpleWarmUpMargin,
  simpleWarmUpPosition,
  simpleWarmUpHeight,
  simpleWarmUpWidth,
  simpleWarmUpTop,
  simpleWarmUpRight,
  simpleWarmUpBottom,
  simpleWarmUpLeft,
  simpleWarmUpMaxWidth,
  simpleWarmUpOverflow,
  simpleWarmUpMaxHeight,
  exercisesMargin,
  exercisesPosition,
  exercisesWidth,
  exercisesTop,
  exercisesLeft,
  exercisesFontSize,
  exercisesLineHeight,
  exercisesFontFamily,
  exercisesColor,
  exercisesTextAlign,
  exercisesDisplay,
}) => {
  const smallCardStyle = useMemo(() => {
    return {
      position: smallCardPosition,
      width: smallCardWidth,
      top: smallCardTop,
      left: smallCardLeft,
    };
  }, [smallCardPosition, smallCardWidth, smallCardTop, smallCardLeft]);

  const simpleWarmUpStyle = useMemo(() => {
    return {
      margin: simpleWarmUpMargin,
      position: simpleWarmUpPosition,
      height: simpleWarmUpHeight,
      width: simpleWarmUpWidth,
      top: simpleWarmUpTop,
      right: simpleWarmUpRight,
      bottom: simpleWarmUpBottom,
      left: simpleWarmUpLeft,
      maxWidth: simpleWarmUpMaxWidth,
      overflow: simpleWarmUpOverflow,
      maxHeight: simpleWarmUpMaxHeight,
    };
  }, [
    simpleWarmUpMargin,
    simpleWarmUpPosition,
    simpleWarmUpHeight,
    simpleWarmUpWidth,
    simpleWarmUpTop,
    simpleWarmUpRight,
    simpleWarmUpBottom,
    simpleWarmUpLeft,
    simpleWarmUpMaxWidth,
    simpleWarmUpOverflow,
    simpleWarmUpMaxHeight,
  ]);

  const exercisesStyle = useMemo(() => {
    return {
      margin: exercisesMargin,
      position: exercisesPosition,
      width: exercisesWidth,
      top: exercisesTop,
      left: exercisesLeft,
      fontSize: exercisesFontSize,
      lineHeight: exercisesLineHeight,
      fontFamily: exercisesFontFamily,
      color: exercisesColor,
      textAlign: exercisesTextAlign,
      display: exercisesDisplay,
    };
  }, [
    exercisesMargin,
    exercisesPosition,
    exercisesWidth,
    exercisesTop,
    exercisesLeft,
    exercisesFontSize,
    exercisesLineHeight,
    exercisesFontFamily,
    exercisesColor,
    exercisesTextAlign,
    exercisesDisplay,
  ]);

  return (
    <div
      className="relative w-[311px] h-[76px] text-left text-mini text-white font-body-regular"
      style={smallCardStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-dark-2" />
      <div className="absolute h-[47.37%] w-[47.27%] top-[13.16%] left-[30.23%] leading-[18px] font-semibold inline-block">
        <p className="m-0" style={simpleWarmUpStyle}>
          {exerciseTitle}
        </p>
        <p className="m-0" style={exercisesStyle}>
          {exerciseDuration}
        </p>
      </div>
      <img
        className="absolute h-full w-[25.08%] top-[0%] right-[74.92%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={imageDimensions}
      />
      <img
        className="absolute top-[26px] right-[16px] w-6 h-6 overflow-hidden"
        alt=""
        src={exerciseDescription}
      />
      <div className="absolute w-[18.01%] top-[65.79%] left-[30.23%] text-smi leading-[16px] text-primary inline-block">
        0:30
      </div>
    </div>
  );
};

export default SmallCard;
