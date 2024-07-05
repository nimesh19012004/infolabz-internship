import React from "react";
import App, { Second } from "./App";
import First from "./extra";
import Notification from "./practice";

const Mycom = () => {
  return <div>mycom</div>;
};

export const Compone = () => {
  return <div>second</div>;
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
