import React from "react";
import "../styles/papers.scss";
const Paper = (props) => {
  const { content } = props;
  return <div className="paper">{content}</div>;
};

export default Paper;
