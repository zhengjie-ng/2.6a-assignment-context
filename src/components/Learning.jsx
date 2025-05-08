import { createContext, useContext } from "react";
import Nested from "./Nested";

export const LearningContext = createContext();

const person = {
  firstName: "Zheng Jie",
  lastName: "Ng",
  hobby: "Swimming",
};

function Learning() {
  return (
    <LearningContext.Provider value={person}>
      <Nested />
    </LearningContext.Provider>
  );
}

export default Learning;
