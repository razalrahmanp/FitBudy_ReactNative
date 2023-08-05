const FormContainer1 = () => {
  return (
    <div className="absolute top-[414px] left-[32px] w-[311px] h-[220px] text-left text-mid text-white font-body-regular">
      <div className="absolute top-[0px] left-[0px] w-[311px] h-[60px]">
        <img
          className="absolute h-[1.67%] w-full top-[99.17%] right-[0%] bottom-[-0.83%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle.svg"
        />
        <div className="absolute top-[36.67%] left-[5.14%] font-semibold">
          Sarah145@mail
        </div>
        <div className="absolute top-[3.33%] left-[5.14%] text-2xs leading-[13px] text-red-100">
          You have entered an invalid email address!
        </div>
        <img
          className="absolute top-[18px] right-[13px] w-6 h-6"
          alt=""
          src="/close-square3.svg"
        />
      </div>
      <div className="absolute top-[80px] left-[0px] w-[311px] h-[60px]">
        <img
          className="absolute h-[1.67%] w-full top-[99.17%] right-[0%] bottom-[-0.83%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle.svg"
        />
        <div className="absolute top-[36.67%] left-[5.14%] font-semibold" />
        <div className="absolute top-[3.33%] left-[5.14%] text-2xs leading-[13px] text-primary">
          Password
        </div>
        <img
          className="absolute top-[18px] right-[13px] w-6 h-6"
          alt=""
          src="/hide.svg"
        />
      </div>
      <div className="absolute top-[160px] left-[0px] w-[311px] h-[60px]">
        <img
          className="absolute h-[1.67%] w-full top-[99.17%] right-[0%] bottom-[-0.83%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle.svg"
        />
        <div className="absolute top-[36.67%] left-[5.14%] font-semibold" />
        <div className="absolute top-[3.33%] left-[5.14%] text-2xs leading-[13px] text-primary">
          Password again
        </div>
        <img
          className="absolute top-[18px] right-[13px] w-6 h-6"
          alt=""
          src="/hide.svg"
        />
      </div>
      <img
        className="absolute top-[111px] left-[16px] w-[92px] h-2"
        alt=""
        src="/password.svg"
      />
      <img
        className="absolute top-[191px] left-[16px] w-[92px] h-2"
        alt=""
        src="/password.svg"
      />
    </div>
  );
};

export default FormContainer1;
