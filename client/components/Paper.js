import React, { useState } from "react";
import "../styles/papers.scss";
const Paper = (props) => {
  const { content, author } = props;
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      {!isClicked ? (
        <div className="paper" onClick={() => setIsClicked(!isClicked)}>
          <div className="paper-content">
            <span>{content}</span>
          </div>
        </div>
      ) : (
        <div className="paper-clicked" onClick={() => setIsClicked(!isClicked)}>
          <div className="paper-author">
            <span>{author}</span>
          </div>
        </div>
      )}
      {/* <div className="allow">
        <span>▼</span>
      </div> */}
      {/* <div className="paper-author">
        <span>from </span>
        <span>{author}</span>
      </div> */}
    </>
  );
};

export default Paper;
