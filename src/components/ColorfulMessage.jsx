import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    // color: color,の場合は省略できる
    color,
    fontSize: "18px"
  };
  //props.messageでもOK
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
