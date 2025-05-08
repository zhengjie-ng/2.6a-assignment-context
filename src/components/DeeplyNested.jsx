import { useContext } from "react";
import { LearningContext } from "./Learning";

function DeeplyNested() {
  const { firstName, lastName, hobby } = useContext(LearningContext);
  return (
    <ul>
      {/* {value.map((data) => (
        <li>{data}</li>
      ))} */}
      <li>{firstName}</li>
      <li>{lastName}</li>
      <li>{hobby}</li>
    </ul>
  );
}

export default DeeplyNested;
