import { useState } from "react";

const Myaccordian = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="main-head">
        <p
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "📨" : "📧"}
        </p>
        <h3>{question}</h3>
      </div>
      <p className="answer">{answer}</p>
    </>
  );
};

export default Myaccordian;
