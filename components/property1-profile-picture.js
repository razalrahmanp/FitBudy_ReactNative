import { useMemo } from "react";

const Property1ProfilePicture = ({
  imageDimensions,
  property1ProfilePicturePosition,
  property1ProfilePictureTop,
  property1ProfilePictureLeft,
}) => {
  const property1ProfilePictureStyle = useMemo(() => {
    return {
      position: property1ProfilePicturePosition,
      top: property1ProfilePictureTop,
      left: property1ProfilePictureLeft,
    };
  }, [
    property1ProfilePicturePosition,
    property1ProfilePictureTop,
    property1ProfilePictureLeft,
  ]);

  return (
    <img
      className="relative w-[57px] h-[57px]"
      alt=""
      src={imageDimensions}
      style={property1ProfilePictureStyle}
    />
  );
};

export default Property1ProfilePicture;
