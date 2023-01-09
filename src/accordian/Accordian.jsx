import { useState } from "react";
import "../index.css";
import { questions } from "./api";
import Myaccordian from "./Myaccordian";

const Accordian = () => {
  const [data, setData] = useState(questions);
  return (
    <>
      <section className="main-div">
        <h1>React basic project</h1>
        {data.map((currEle) => {
          const { id } = currEle;
          return <Myaccordian keys={id} {...currEle} />;
        })}
      </section>
    </>
  );
};

export default Accordian;
