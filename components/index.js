import TrainerCard from "./trainer-card";

const FitnessInstructors = () => {
  return (
    <div className="relative bg-dark-1 w-[375px] h-[812px] overflow-hidden text-center text-xl text-white font-integral-cf">
      <div className="absolute top-[113px] left-[24px] w-[327px] h-[768px]">
        <TrainerCard
          trainingTitle="High Intensity Training"
          experienceYears="5 years experience"
          profileImageUrl="/image@2x.png"
          instructorName="Richard Will"
          averageRating="4.8"
          exerciseImageUrl="/right.svg"
          trainerCardPosition="absolute"
          trainerCardWidth="327px"
          trainerCardTop="0px"
          trainerCardLeft="0px"
          titleColor="#000"
          rightIconTop="38px"
        />
        <TrainerCard
          trainingTitle="Functional Strength"
          experienceYears="4 years experience"
          profileImageUrl="/image1@2x.png"
          instructorName="Jennifer James"
          averageRating="4.6"
          exerciseImageUrl="/right.svg"
          trainerCardPosition="absolute"
          trainerCardWidth="327px"
          trainerCardTop="112px"
          trainerCardLeft="0px"
          titleColor="#000"
          rightIconTop="38px"
        />
        <TrainerCard
          trainingTitle="Strength Training"
          experienceYears="6 years experience"
          profileImageUrl="/image2@2x.png"
          instructorName="Brian Edward"
          averageRating="4.5"
          exerciseImageUrl="/right.svg"
          trainerCardPosition="absolute"
          trainerCardWidth="327px"
          trainerCardTop="224px"
          trainerCardLeft="0px"
          titleColor="#000"
          rightIconTop="38px"
        />
        <TrainerCard
          trainingTitle="High Intensity Training"
          experienceYears="2 years experience"
          profileImageUrl="/image3@2x.png"
          instructorName="Emily Kevin"
          averageRating="4.9"
          exerciseImageUrl="/right.svg"
          trainerCardPosition="absolute"
          trainerCardWidth="327px"
          trainerCardTop="336px"
          trainerCardLeft="0px"
          titleColor="#000"
          rightIconTop="38px"
        />
        <TrainerCard
          trainingTitle="High Intensity Training"
          experienceYears="9 years experience"
          profileImageUrl="/image4@2x.png"
          instructorName="Ronald Jason"
          averageRating="4.2"
          exerciseImageUrl="/right.svg"
          trainerCardPosition="absolute"
          trainerCardWidth="327px"
          trainerCardTop="560px"
          trainerCardLeft="0px"
          titleColor="#000"
          rightIconTop="38px"
        />
        <TrainerCard
          trainingTitle="Functional Strength"
          experienceYears="8 years experience"
          profileImageUrl="/image5@2x.png"
          instructorName="Rebecca Smith"
          averageRating="4.8"
          exerciseImageUrl="/right.svg"
          trainerCardPosition="absolute"
          trainerCardWidth="327px"
          trainerCardTop="448px"
          trainerCardLeft="0px"
          titleColor="#000"
          rightIconTop="38px"
        />
        <TrainerCard
          trainingTitle="High Intensity Training"
          experienceYears="7 years experience"
          profileImageUrl="/image6@2x.png"
          instructorName="Cristofer Arcand"
          averageRating="4.8"
          exerciseImageUrl="/right1.svg"
          trainerCardPosition="absolute"
          trainerCardWidth="327px"
          trainerCardTop="672px"
          trainerCardLeft="0px"
          titleColor="#000"
          rightIconTop="62px"
        />
      </div>
      <div className="absolute h-[3.94%] w-[71.73%] top-[6.9%] right-[21.87%] bottom-[89.16%] left-[6.4%]">
        <div className="absolute h-[78.13%] w-[78.81%] top-[3.13%] right-[0%] bottom-[18.75%] left-[21.19%]">
          <b className="absolute top-[0%] left-[0%] leading-[25px]">
            Fitness Trainers
          </b>
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-8 h-8"
          alt=""
          src="/circle-left.svg"
        />
      </div>
    </div>
  );
};

export default FitnessInstructors;
