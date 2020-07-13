import React from "react";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import Logger from "./Logger";

export default function Root(props) {
  return (
    <Provider store={props.store}>
        <Logger/>
    </Provider>
  );
}
