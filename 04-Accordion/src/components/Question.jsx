import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = (props) => {
  const title = props.title; // destructuring props
  const info = props.info;

  const [showInfo, setShowInfo] = useState(false);

  const toggleBtn = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={toggleBtn} className="btn">
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
