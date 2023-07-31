const SignUp2 = () => {
  return (
    <div className="relative bg-dark-1 w-full h-[801px] overflow-hidden text-left text-mid text-white font-body-regular">
      <div className="absolute top-[0px] left-[0px] w-[375px] h-96 text-3xs font-integral-cf">
        <img
          className="absolute top-[0px] left-[0px] w-[375px] h-96 object-cover"
          alt=""
          src="/background5@2x.png"
        />
        <div className="absolute top-[269px] left-[34px] leading-[16px]">
          <p className="m-0">Enter your informations below or</p>
          <p className="m-0">login with a other account</p>
        </div>
        <div className="absolute top-[214px] left-[32px] text-13xl leading-[43px]">
          <span>Hello</span>
          <span className="font-light font-inter">{` `}</span>
          <b>rookies,</b>
        </div>
      </div>
      <div className="absolute top-[714px] left-[32px] w-[310px] h-[54px] text-center text-black">
        <div className="absolute top-[2px] left-[169px] rounded-29xl bg-primary flex flex-row py-[13px] pr-5 pl-7 items-center justify-center">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="relative font-semibold">Sign up</div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/chevronright1.svg"
            />
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[75px] w-[54px] h-[54px]"
          alt=""
          src="/account-button2.svg"
        />
        <img
          className="absolute top-[0px] left-[0px] w-[54px] h-[54px]"
          alt=""
          src="/account-button3.svg"
        />
      </div>
      <div className="absolute top-[58px] left-[32px] w-[114px] h-[26px] text-smi">
        <div className="absolute top-[0px] left-[0px] leading-[16px] font-semibold">
          Login
        </div>
        <div className="absolute top-[0px] left-[67px] leading-[16px] font-semibold">
          Sign up
        </div>
        <div className="absolute top-[23px] left-[67px] bg-primary w-[47px] h-[3px]" />
      </div>
      <div className="absolute top-[414px] left-[32px] w-[311px] h-[220px]">
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
    </div>
  );
};

export default SignUp2;
