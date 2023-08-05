import { useMemo } from "react";

const TrainerCard = ({
  trainingTitle,
  experienceYears,
  profileImageUrl,
  instructorName,
  averageRating,
  exerciseImageUrl,
  trainerCardPosition,
  trainerCardWidth,
  trainerCardTop,
  trainerCardLeft,
  titleColor,
  rightIconTop,
}) => {
  const trainerCardStyle = useMemo(() => {
    return {
      position: trainerCardPosition,
      width: trainerCardWidth,
      top: trainerCardTop,
      left: trainerCardLeft,
    };
  }, [trainerCardPosition, trainerCardWidth, trainerCardTop, trainerCardLeft]);

  const titleStyle = useMemo(() => {
    return {
      color: titleColor,
    };
  }, [titleColor]);

  const rightIconStyle = useMemo(() => {
    return {
      top: rightIconTop,
    };
  }, [rightIconTop]);

  return (
    <div
      className="relative w-[343px] h-24 text-left text-2xs text-white font-body-regular"
      style={trainerCardStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-dark-2" />
      <div className="absolute top-[41px] left-[96px] leading-[13px]">
        {trainingTitle}
      </div>
      <div className="absolute bottom-[16px] left-[96px] leading-[13px] text-primary">
        {experienceYears}
      </div>
      <img
        className="absolute top-[16px] left-[16px] rounded-[50%] w-16 h-16 object-cover"
        alt=""
        src={profileImageUrl}
      />
      <div className="absolute top-[16px] left-[96px] flex flex-row items-center justify-start gap-[8px] text-mid">
        <div className="relative font-semibold">{instructorName}</div>
        <div className="relative w-[33px] h-4 text-center text-2xs">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-primary" />
            <b
              className="absolute top-[6.25%] left-[24.24%] leading-[13px]"
              style={titleStyle}
            >
              {averageRating}
            </b>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[38px] right-[9px] w-6 h-6"
        alt=""
        src={exerciseImageUrl}
        style={rightIconStyle}
      />
    </div>
  );
};

export default TrainerCard;
