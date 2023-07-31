import { useCallback } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const onSignUpText1Click = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  return (
    <div className="relative bg-dark-1 w-full h-[801px] overflow-hidden text-left text-mid text-white font-body-regular">
      <div className="absolute top-[0px] left-[0px] w-[375px] h-[460px] text-17xl font-integral-cf">
        <img
          className="absolute top-[0px] left-[0px] w-[375px] h-[460px] object-cover"
          alt=""
          src="/background3@2x.png"
        />
        <div className="absolute top-[295px] left-[32px] leading-[43px]">
          <p className="m-0">Welcome back,</p>
          <p className="m-0">
            <b>Sarah</b>
          </p>
        </div>
      </div>
      <div className="absolute top-[714px] left-[32px] w-[310px] h-[54px] text-center text-black">
        <div className="absolute top-[2px] left-[185px] rounded-29xl bg-primary flex flex-row py-[13px] pr-5 pl-7 items-center justify-center">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="relative font-semibold">Login</div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/chevronright1.svg"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[75px] w-[54px] h-[54px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-dark-3" />
          <img
            className="absolute h-[44.44%] w-[44.44%] top-[27.78%] right-[27.78%] bottom-[27.78%] left-[27.78%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/google1.svg"
          />
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[54px] h-[54px]"
          alt=""
          src="/account-button1.svg"
        />
      </div>
      <div className="absolute top-[490px] left-[32px] w-[311px] h-44">
        <div className="absolute top-[160px] left-[196px] text-smi leading-[16px] font-semibold text-primary">
          Forgot Password
        </div>
        <div className="absolute top-[80px] left-[0px] w-[311px] h-[60px]">
          <img
            className="absolute h-[1.67%] w-full top-[99.17%] right-[0%] bottom-[-0.83%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle.svg"
          />
          <div className="absolute top-[19px] left-[16px]">Password</div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[311px] h-[60px]">
          <img
            className="absolute h-[1.67%] w-full top-[99.17%] right-[0%] bottom-[-0.83%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle.svg"
          />
          <div className="absolute top-[19px] left-[16px]">Email</div>
        </div>
      </div>
      <div className="absolute top-[58px] left-[32px] w-[113px] h-[26px] text-smi">
        <div className="absolute top-[0px] left-[0px] leading-[16px] font-semibold">
          Login
        </div>
        <div
          className="absolute top-[0px] left-[67px] leading-[16px] font-semibold cursor-pointer"
          onClick={onSignUpText1Click}
        >
          Sign up
        </div>
        <div className="absolute top-[23px] left-[0px] bg-primary w-[35px] h-[3px]" />
      </div>
      <img
        className="absolute top-[43px] left-[286px] w-[58px] h-[58px]"
        alt=""
        src="/profile-picture1.svg"
      />
      <img
        className="absolute top-[47px] left-[290px] rounded-45xl w-[50px] h-[50px] object-cover"
        alt=""
        src="/59@2x.png"
      />
    </div>
  );
};

export default Login;
