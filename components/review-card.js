import { useMemo } from "react";

const ReviewCard = ({
  testimonialText,
  title,
  reviewCardPosition,
  reviewCardWidth,
  reviewCardTop,
  reviewCardLeft,
}) => {
  const reviewCardStyle = useMemo(() => {
    return {
      position: reviewCardPosition,
      width: reviewCardWidth,
      top: reviewCardTop,
      left: reviewCardLeft,
    };
  }, [reviewCardPosition, reviewCardWidth, reviewCardTop, reviewCardLeft]);

  return (
    <div
      className="relative rounded-2xl bg-dark-2 w-[343px] flex flex-col p-4 box-border items-start justify-start gap-[16px] text-left text-mini text-white font-body-regular"
      style={reviewCardStyle}
    >
      <div className="self-stretch flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-[10px]">
          <img
            className="relative rounded-[50%] w-8 h-8 object-cover"
            alt=""
            src="/ellipse-24@2x.png"
          />
          <div className="relative leading-[18px] font-semibold">
            Alexa Cooper
          </div>
          <div className="relative w-[27px] h-[13.19px] text-center text-4xs">
            <div className="absolute h-[98.58%] w-full top-[1.42%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-primary" />
              {!title && (
                <b className="absolute top-[6.25%] left-[26.26%] leading-[13px] hidden">
                  4.8
                </b>
              )}
            </div>
            <b className="absolute top-[0%] left-[20.37%] leading-[13px] font-inter">
              4.8
            </b>
          </div>
        </div>
        <div className="relative text-2xs leading-[13px] text-right">
          2d ago
        </div>
      </div>
      <div className="self-stretch relative text-smi leading-[16px]">
        {testimonialText}
      </div>
    </div>
  );
};

export default ReviewCard;
