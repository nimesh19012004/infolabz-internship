import React from "react";
import App from "./App";
import First, { Second } from "./extra";
import Notification from "./practice";

const Mycom = () => {
  return <div>mycom</div>;
};

export const Compone = () => {
  return <div>
    <Second/>
  </div>;
};

export const Comptwo=()=>{
    return (
        <div>
         comptow
        </div>
    )
}
export const Add = () => {
  return <div>
    <Comptwo/>
    <First/>
    <Notification/>
    <App/>

  </div>;
};

export default Mycom;
