import React from "react";
import Search from "./Search";
import Timeline from "./Timeline";
import Popup from "./Popup";
import AddButton from "./AddButton";
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Search />
      <Timeline />
      <Popup />
      <AddButton />
    </div>
  )
}

export default Main;
