import React, { useState } from "react";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import SystemUpdateAltOutlinedIcon from "@mui/icons-material/SystemUpdateAltOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import "./TakeNote2.css";
import { CreatnoteApi } from "../../services/dataservice";
import TakeNote1 from "../TakeNote1/TakeNote1";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  TakeNote2: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    /* margin: 0px; */
    padding: "0px",
    /* margin-top: 50px; */
    width: "40%",
    border: "1px solid rgb(238, 234, 234)",
    borderRadius: "8px",
    boxShadow: "1px 1px lightblue",
    /* margin-left: 4px; */
    margin: "50px auto 0px auto",
  },
  TakeNote2Input: {
    margin: "0px",
    height: "30px",
    width: "100%",
    border: " 0px",
    padding: " 5px 15px",
    fontSize: "18px",
    marginLeft: "3px",
    boxSizing: "border-box",
    outline: "none",
  },
  Note2Symbolmaincontainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    marginBottom: "5px",
  },

  Note2SymbolDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    color: "grey",
  },

  Note2Symbols: {
    marginLeft: "12px",
  },
  closeBtn: {
    padding: "3px 15px",
    margin: "0px 10px",
    borderRadius: "10px",
    border: "1px solid rgb(238, 234, 234)",
  },
  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]: {
    TakeNote2: {
      width: "75%",
      margin: "50px auto 0px 17%",
    },
    Note2SymbolDiv: {
      marginLeft: "0px",
    },
    Note2Symbols: {
      marginLeft: "5px",
    },
    closeBtn: { margin: "0px 5px", padding: "3px 3px" },
  },
  ["@media only screen and (min-width: 481px) and (max-width: 768px)"]: {
    TakeNote2: {
      width: "75%",
      margin: "50px auto 0px 15%",
    },
  },
  ["@media only screen and (min-width: 769px) and (max-width: 1024px)"]: {
    TakeNote2: {
      width: "45%",
    },
  },
});
const TakeNote2 = () => {
  const classes = useStyle();
  const [notes, setNotes] = useState({
    title: "",
    description: "",
    isArchived: false,
  });
  const onChange = (event) => {
    setNotes({ ...notes, [event.target.name]: event.target.value });
  };

  const handleCreate = () => {
    CreatnoteApi(notes);
    setViewNote2(!viewNote2);
  };
  const [viewNote2, setViewNote2] = useState(false);

  const makeArchive = () => {
    setNotes({ ...notes, isArchived: true });
  };
  if (viewNote2) {
    return <TakeNote1 />;
  } else {
    return (
      <Paper className={classes.TakeNote2} elevation={3}>
        <input
          type="text"
          className={classes.TakeNote2Input}
          placeholder="Title"
          name="title"
          value={notes.title}
          onChange={onChange}
        />
        <textarea
          type="text"
          className={classes.TakeNote2Input}
          placeholder="Take a note"
          name="description"
          value={notes.description}
          onChange={onChange}
        />

        <div className={classes.Note2Symbolmaincontainer}>
          <div className={classes.Note2SymbolDiv}>
            <div>
              <AddAlertOutlinedIcon
                fontSize="small"
                className={classes.Note2Symbols}
              />
            </div>
            <div>
              <PersonAddAltOutlinedIcon
                fontSize="small"
                className={classes.Note2Symbols}
              />
            </div>
            <div>
              <ColorLensOutlinedIcon
                fontSize="small"
                className={classes.Note2Symbols}
              />
            </div>
            <div>
              <AddPhotoAlternateOutlinedIcon
                fontSize="small"
                className={classes.Note2Symbols}
              />
            </div>
            <div onClick={makeArchive}>
              <SystemUpdateAltOutlinedIcon
                fontSize="small"
                className={classes.Note2Symbols}
              />
            </div>
            <div>
              <DeleteOutlinedIcon
                fontSize="medium"
                className={classes.Note2Symbols}
              />
            </div>
            <div>
              <UndoIcon fontSize="small" className={classes.Note2Symbols} />
            </div>
            <div>
              <RedoIcon fontSize="small" className={classes.Note2Symbols} />
            </div>
          </div>
          <button className={classes.closeBtn} onClick={handleCreate}>
            close
          </button>
        </div>
      </Paper>
    );
  }
};

export default TakeNote2;
