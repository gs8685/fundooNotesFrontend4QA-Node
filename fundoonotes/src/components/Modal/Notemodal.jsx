import React, { useState } from "react";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import SystemUpdateAltOutlinedIcon from "@mui/icons-material/SystemUpdateAltOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import "../TakeNote2/TakeNote2.css";
import "./modal.css";
import { EditnoteApi } from "../../services/dataservice";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";

const Notemodal = ({ note }) => {
  const [displayDashboard, setDisplayDashboard] = useState(false);
  const refreshPage = () => {
    window.location.reload(false);
  };
  const handleEdit = () => {
    //call update api here
    EditnoteApi(editnote);
    setDisplayDashboard(!displayDashboard);
    //and dashboard should render again
    refreshPage();
  };

  const [editnote, setEditnote] = useState({
    _id: note._id,
    title: note.title,
    description: note.description,
  });
  const onChange = (event) => {
    setEditnote({ ...editnote, [event.target.name]: event.target.value });
  };

  if (displayDashboard) {
    return (
      <>
        <Link to="/Home" reloadDocument />
      </>
    );
  } else {
    return (
      <>
        <div className="shadow-effect"></div>
        <Paper className="TakeNote2 Modal">
          <input
            type="text"
            className="TakeNote2Input TakeNote2Input-modal "
            placeholder="Title"
            name="title"
            value={editnote.title}
            onChange={onChange}
          />
          <textarea
            type="text"
            className="TakeNote2Input TakeNote2Input-modal"
            placeholder="Take a note"
            name="description"
            value={editnote.description}
            onChange={onChange}
          />

          <div className="Note2Symbolmaincontainer-modal modal-action-container">
            <div className="Note2SymbolDiv">
              <AddAlertOutlinedIcon fontSize="small" className="Note2Symbols" />
              <PersonAddAltOutlinedIcon
                fontSize="small"
                className="Note2Symbols"
              />
              <ColorLensOutlinedIcon
                fontSize="small"
                className="Note2Symbols"
              />
              <AddPhotoAlternateOutlinedIcon
                fontSize="small"
                className="Note2Symbols"
              />
              <SystemUpdateAltOutlinedIcon
                fontSize="small"
                className="Note2Symbols"
              />
              <MoreVertOutlinedIcon fontSize="small" className="Note2Symbols" />
              <UndoIcon fontSize="small" className="Note2Symbols" />
              <RedoIcon fontSize="small" className="Note2Symbols" />
            </div>
            <button className="close-btn" onClick={handleEdit}>
              close
            </button>
          </div>
        </Paper>
      </>
    );
  }
};

export default Notemodal;
