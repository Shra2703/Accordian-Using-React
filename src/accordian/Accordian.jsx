import { useState } from "react";
import "../index.css";
import { questions } from "./api";
import Myaccordian from "./Myaccordian";

const Accordian = () => {
  const [data, setData] = useState(questions);
  return (
    <>
      {
      data.map((currEle) => {
        const {id} = currEle;
        return <Myaccordian keys = {id}/>;
      })
      }
    </>
  );
};

export default Accordian;
