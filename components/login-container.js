import Property1Placeholder from "./property1-placeholder";

const LoginContainer = () => {
  return (
    <div className="absolute top-[490px] left-[32px] w-[311px] h-44 text-left text-smi text-primary font-body-regular">
      <div className="absolute top-[160px] left-[196px] leading-[16px] font-semibold">
        Forgot Password
      </div>
      <Property1Placeholder
        inputPlaceholder="Password"
        property1PlaceholderPosition="absolute"
        property1PlaceholderTop="80px"
        property1PlaceholderLeft="0px"
        placeholderColor="#fff"
      />
      <Property1Placeholder
        inputPlaceholder="Email"
        property1PlaceholderPosition="absolute"
        property1PlaceholderTop="0px"
        property1PlaceholderLeft="0px"
        placeholderColor="#fff"
      />
    </div>
  );
};

export default LoginContainer;
