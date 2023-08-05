import Point from "./point";
import ReviewCard from "./review-card";

const ReviewsCardContainer = () => {
  return (
    <div className="absolute top-[453px] left-[24px] w-[646px] h-[245px] text-left text-smi-1 text-white font-body-regular">
      <div className="absolute top-[2px] left-[283px] w-9 h-[18px] text-center">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs-4 bg-primary" />
          <b className="absolute top-[6.25%] left-[21.47%] leading-[14.3px]">
            4.6
          </b>
        </div>
      </div>
      <div className="absolute top-[0%] left-[0%] text-mid font-semibold">
        Reviews
      </div>
      <Point
        rating="4.6"
        pointPosition="absolute"
        pointTop="0px"
        pointLeft="294px"
        titleColor="#000"
      />
      <div className="absolute top-[18.37%] left-[35.45%] text-smi leading-[16px] text-primary text-right">
        Read all reviews
      </div>
      <div className="absolute top-[37px] left-[101.65px] w-8 h-8 text-right text-2xs text-black">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-primary w-8 h-8" />
        <div className="absolute top-[28.13%] left-[19.85%] leading-[13px]">
          174
        </div>
      </div>
      <div className="absolute top-[101px] left-[0px] rounded-2xl bg-dark-2 w-[319px] flex flex-col p-4 box-border items-start justify-start gap-[16px] text-mini">
        <div className="self-stretch relative h-8">
          <div className="absolute top-[0px] left-[0px] w-[175px] h-8">
            <div className="absolute top-[21.88%] left-[24%] leading-[18px] font-semibold">
              Sharon Jem
            </div>
            <div className="absolute top-[9.41px] left-[148px] w-[27px] h-[13.19px] text-center text-4xs font-inter">
              <div className="absolute h-[98.58%] w-full top-[1.42%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-primary" />
                <b className="absolute top-[6.25%] left-[22.56%] leading-[13px] hidden">
                  4.8
                </b>
              </div>
              <b className="absolute top-[0%] left-[20.37%] leading-[13px] text-black">
                4.8
              </b>
            </div>
            <img
              className="absolute top-[0px] left-[0px] rounded-45xl w-8 h-8 object-cover"
              alt=""
              src="/47@2x.png"
            />
          </div>
          <div className="absolute top-[9.5px] right-[0px] text-2xs leading-[13px] text-right">
            2d ago
          </div>
        </div>
        <div className="self-stretch relative text-smi leading-[16px]">
          Had such an amazing session with Maria. She instantly picked up on the
          level of my fitness and adjusted the workout to suit me whilst also
          pushing me to my limits.
        </div>
      </div>
      <ReviewCard
        testimonialText="Had such an amazing session with Maria. She instantly picked up on the level of my fitness and adjusted the workout to suit me whilst also pushing me to my limits."
        title={false}
        reviewCardPosition="absolute"
        reviewCardWidth="311px"
        reviewCardTop="101px"
        reviewCardLeft="335px"
      />
    </div>
  );
};

export default ReviewsCardContainer;
