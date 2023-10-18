import React, { useState } from "react";
import "./Header.css";
import GoogleKeepLogo from "./GoogleKeepLogo.png";
import AccLogo from "./AccLogo.jpg";

import DehazeIcon from "@mui/icons-material/Dehaze";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import Drawer from "../drawer/Drawer";
import DrawerExtended from "../drawer/DrawerExtended";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";

const useStyle = makeStyles({
  HeaderClass: {
    display: "flex",
    alignItems: "center",
    height: "50px",
    margin: "0px",
    border: "1px solid rgba(220, 210, 210, 0.963)",
    position: "sticky",
    top: "0",
    backgroundColor: "white",
  },
  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]: {
    HeaderClass: {
      width: "100vw",
    },
  },
});

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const [showDrawer, setShowDrawer] = useState(true);
  const extended = useSelector((state) => state.extendedaction);

  const extendDrawer = () => {
    setDrawer(!drawer);
    setShowDrawer(!showDrawer);
  };
  const classes = useStyle();
  return (
    <>
      <Paper className={classes.HeaderClass} elevation={0}>
        <div className="menue" onClick={extendDrawer}>
          <DehazeIcon />
        </div>
        <div className="GKeepLogoClass">
          <img className="GKeepLogo" src={GoogleKeepLogo} alt="Logo" />
        </div>
        <div className="GKeep">
          <span className="P_GKeep">{extended}</span>
        </div>
        <div className="GKeep SearchDiv">
          <SearchIcon />
          <input className="SearchBar" type="text" placeholder="Search" />
          <ClearIcon />
        </div>
        <div className="RightIconsDiv">
          <RefreshIcon className="SymbolMargins" />
          <ViewStreamIcon className="SymbolMargins" />
          <SettingsIcon className="SymbolMargins" />
          <AppsIcon className="SymbolMargins" />
          <img className="SymbolMargins" src={AccLogo} alt="AccLogo" />
        </div>
        {showDrawer && <Drawer />}
      </Paper>
      {drawer && <DrawerExtended />}
    </>
  );
};

export default Header;
