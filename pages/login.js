import { useCallback } from "react";
import LoginButtonContainer from "../components/login-button-container";
import LoginContainer from "../components/login-container";
import { useRouter } from "next/router";
import Property1ProfilePicture from "../components/property1-profile-picture";

const Login = () => {
  const router = useRouter();

  const onSignUpText1Click = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  return (
    <div className="relative bg-dark-1 w-full h-[801px] overflow-hidden text-left text-17xl text-white font-integral-cf">
      <div className="absolute top-[0px] left-[0px] w-[375px] h-[460px]">
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
      <LoginButtonContainer />
      <LoginContainer />
      <div className="absolute top-[58px] left-[32px] w-[113px] h-[26px] text-smi font-body-regular">
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
      <Property1ProfilePicture
        imageDimensions="/profile-picture1.svg"
        property1ProfilePicturePosition="absolute"
        property1ProfilePictureTop="43px"
        property1ProfilePictureLeft="286px"
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
