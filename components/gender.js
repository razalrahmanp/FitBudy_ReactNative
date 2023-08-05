import { useMemo } from "react";

const Gender = ({
  avatarImageUrl,
  genderIconUrl,
  genderPosition,
  genderTop,
  genderLeft,
  ellipseDivBackgroundColor,
  maleLeft,
  maleColor,
}) => {
  const genderStyle = useMemo(() => {
    return {
      position: genderPosition,
      top: genderTop,
      left: genderLeft,
    };
  }, [genderPosition, genderTop, genderLeft]);

  const ellipseDivStyle = useMemo(() => {
    return {
      backgroundColor: ellipseDivBackgroundColor,
    };
  }, [ellipseDivBackgroundColor]);

  const maleStyle = useMemo(() => {
    return {
      left: maleLeft,
      color: maleColor,
    };
  }, [maleLeft, maleColor]);

  return (
    <div
      className="relative w-[140px] h-[140px] text-center text-mini text-white font-body-regular"
      style={genderStyle}
    >
      <div
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-primary"
        style={ellipseDivStyle}
      />
      <img
        className="absolute h-[34.29%] w-[34.29%] top-[25.71%] right-[32.86%] bottom-[40%] left-[32.86%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={avatarImageUrl}
      />
      <div
        className="absolute top-[73.57%] left-[35.71%] leading-[21px]"
        style={maleStyle}
      >
        {genderIconUrl}
      </div>
    </div>
  );
};

export default Gender;
