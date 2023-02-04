import React from "react";
import styles from "./App.module.scss";
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

function App() {
  return <div className={cx("app")}></div>;
}

export default App;
