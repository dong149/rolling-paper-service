import React from "react";
import "../styles/paper.scss";
const Paper = (props) => {
  const { content } = props;
  return <div className="paper">{content}</div>;
};

export default Paper;
