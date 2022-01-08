import React, { useState } from "react";

const Writeup = (props) => {
  const [react, setReact] = useState(true);
  return (
    <>
      <div className="write-up">
        <p className="post">{props.description}</p>
        <hr />
        <div className="react-comment">
          <div
            className="react"
            onClick={(e) => {
              if (react) {
                e.target.style.color = "red";
                setReact(!react);
                e.target.style.fontSize = "1.4rem";
              } else {
                e.target.style.color = "#888888";
                setReact(!react);
                e.target.style.fontSize = "1.3rem";
              }
            }}
          >
            <i className="fas fa-heart"></i>
          </div>
          |
          <div className="comment">
            <i className="far fa-comment-dots"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Writeup;
