import React, { useState } from "react";
import Allnotes from "../../components/Allnotes/Allnotes";
import Header from "../../components/Header/Header";
import TakeNote1 from "../../components/TakeNote1/TakeNote1";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Header />
      <TakeNote1 />
      <Allnotes />
    </>
  );
};

export default Dashboard;
