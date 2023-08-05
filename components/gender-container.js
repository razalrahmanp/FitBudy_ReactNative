import { useMemo } from "react";
import Gender from "./gender";

const GenderContainer = ({
  iconText,
  iconSize,
  propBackgroundColor,
  propColor,
  propBackgroundColor1,
  propColor1,
}) => {
  const ellipseDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const maleStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const ellipseDivStyle1 = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const maleStyle1 = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className="absolute top-[262px] left-[117px] w-[140px] h-[324px]">
      <Gender
        avatarImageUrl="/mars1.svg"
        genderIconUrl="Male"
        genderPosition="absolute"
        genderTop="0px"
        genderLeft="0px"
        ellipseDivBackgroundColor="#d0fd3e"
        maleLeft="35.71%"
        maleColor="#000"
      />
      <Gender
        avatarImageUrl="/venus.svg"
        genderIconUrl="Female"
        genderPosition="absolute"
        genderTop="184px"
        genderLeft="0px"
        ellipseDivBackgroundColor="#2c2c2e"
        maleLeft="30%"
        maleColor="#fff"
      />
    </div>
  );
};

export default GenderContainer;
