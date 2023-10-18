import React, { useState } from "react";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import SystemUpdateAltOutlinedIcon from "@mui/icons-material/SystemUpdateAltOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./TakeNote3.css";
import Notemodal from "../Modal/Notemodal";
import { UpdateArchiveApi, UpdateTrashApi } from "../../services/dataservice";
import Colorpopper from "../colorpopper/Colorpopper";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({});

const TakeNote3 = ({ note, getNotes }) => {
  // const [isArchive, setIsArchive] = useState(initialvalue);
  const [isColor, setIsColor] = useState(false);
  const [modal, setModal] = useState(false);
  const [colour, setColour] = useState({ id: note.id, color: note.color });

  const onArchive = (id) => {
    let objArchive = { _id: note._id, isArchived: true };
    UpdateArchiveApi(objArchive)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onTrash = (id) => {
    // setIsTrash(!isTrash);
    // UpdateTrashApi({ id: note.id, isDeleted: isTrash });
    // console.log("deleted", isTrash);

    let objTrash = { _id: note._id, isTrash: true };
    UpdateTrashApi(objTrash)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onColor = () => {
    setIsColor(!isColor);
  };

  const displayModal = () => {
    console.log("modal clicked");
    setModal(!modal);
  };

  const listenColor = () => {
    getNotes();
  };

  if (modal) {
    return <Notemodal note={note} />;
  } else {
    return (
      <>
        <Paper
          className="TakeNote3"
          style={{
            backgroundColor: colour.color === "" ? "white" : colour.color,
          }}
        >
          <div onClick={displayModal}>
            <input
              type="text"
              className="TakeNote3Input"
              placeholder="Title"
              name="title"
              value={note.title}
              readOnly
            />
            <textarea
              type="text"
              className="TakeNote3Input"
              placeholder="Your note..."
              name="description"
              value={note.description}
              readOnly
            />
          </div>
          <div className="Note3SymbolDiv">
            <div className="responsive-note3">
              <AddAlertOutlinedIcon fontSize="small" className="Note3Symbols" />
            </div>
            <div className="responsive-note3">
              <PersonAddAltOutlinedIcon
                fontSize="small"
                className="Note3Symbols"
              />
            </div>
            <div onClick={onColor} className="responsive-note3">
              <Colorpopper listenColor={listenColor} noteId={note._id} />
            </div>
            <div className="responsive-note3">
              <AddPhotoAlternateOutlinedIcon
                fontSize="small"
                className="Note3Symbols"
              />
            </div>
            <div
              onClick={() => onArchive(note.id)}
              className="responsive-note3"
            >
              <SystemUpdateAltOutlinedIcon
                fontSize="small"
                className="Note3Symbols"
              />
            </div>
            <div onClick={() => onTrash(note.id)} className="responsive-note3">
              <DeleteOutlinedIcon fontSize="medium" className="Note3Symbols" />
            </div>
          </div>
        </Paper>
      </>
    );
  }
};

export default TakeNote3;
