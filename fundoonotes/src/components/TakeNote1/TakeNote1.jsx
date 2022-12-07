import React, { useState } from "react";
import "./TakeNote1.css";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import BrushIcon from "@mui/icons-material/Brush";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import TakeNote2 from "../TakeNote2/TakeNote2";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";

const useStyle = makeStyles({
  TakeNote1: {
    display: "flex",
    alignItems: "center",
    /* margin:0px; */
    padding: "0px",
    /* margin-top: 50px; */
    height: "44px",
    width: "40%",
    // border: " 1px solid rgb(238, 234, 234)",
    borderRadius: "8px",
    // boxShadow: "1px 1px lightblue",
    margin: "50px auto 0px auto",
  },
  TakeNote1Input: {
    margin: "0px",
    padding: "0px",
    height: "38px",
    width: "100%",
    border: "0px",
    paddingLeft: " 4px",
    fontSize: "18px",
    outline: "none",
  },
  NoteIconDiv: {
    display: "flex",
  },
  Note1SymbolDiv: {
    marginRight: "20px",
    borderRadius: "50%",
    color: "grey",
  },
  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]: {
    TakeNote1: {
      width: "75%",
      margin: "50px auto 0px 17%",
    },
  },
  ["@media only screen and (min-width: 481px) and (max-width: 768px)"]: {
    TakeNote1: {
      width: "75%",
      margin: "50px auto 0px 15%",
    },
  },
});
const TakeNote1 = () => {
  const [view, setView] = useState(false);
  const classes = useStyle();
  if (view) {
    return <TakeNote2 />;
  } else {
    return (
      <Paper className={classes.TakeNote1} elevation={3}>
        <input
          type="text"
          className={classes.TakeNote1Input}
          placeholder="Take a note"
          onClick={() => {
            setView(!view);
          }}
        />
        <div className={classes.NoteIconDiv}>
          <DomainVerificationIcon className={classes.Note1SymbolDiv} />
          <div></div>
          <BrushIcon className={classes.Note1SymbolDiv} />
          <WallpaperIcon className={classes.Note1SymbolDiv} />
        </div>
      </Paper>
    );
  }
};

export default TakeNote1;
