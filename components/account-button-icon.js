import { useMemo } from "react";

const AccountButtonIcon = ({
  dimensionCode,
  accountButtonIconPosition,
  accountButtonIconTop,
  accountButtonIconLeft,
  accountButtonIconCursor,
  onBackButtonClick,
}) => {
  const accountButtonIconStyle = useMemo(() => {
    return {
      position: accountButtonIconPosition,
      top: accountButtonIconTop,
      left: accountButtonIconLeft,
      cursor: accountButtonIconCursor,
    };
  }, [
    accountButtonIconPosition,
    accountButtonIconTop,
    accountButtonIconLeft,
    accountButtonIconCursor,
  ]);

  return (
    <img
      className="relative w-[54px] h-[54px]"
      alt=""
      src={dimensionCode}
      style={accountButtonIconStyle}
      onClick={onBackButtonClick}
    />
  );
};

export default AccountButtonIcon;
