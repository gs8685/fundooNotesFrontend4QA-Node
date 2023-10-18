import React, { useState } from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./DrawerExtended.css";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const DrawerExtended = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <>
      <div className="drawer-main-container-extend">
        <div
          className="Rowflex"
          onClick={() => {
            dispatch({ type: "NOTES" });
            navigate("/Home");
          }}
        >
          <LightbulbOutlinedIcon fontSize="large" className="drawer-icons" />
          <span className="DrawerSpan">Notes</span>
        </div>
        <div
          className="Rowflex"
          onClick={() => {
            dispatch({ type: "REMINDER" });
          }}
        >
          <NotificationsNoneOutlinedIcon
            fontSize="large"
            className="drawer-icons"
          />
          <span className="DrawerSpan">Reminder</span>
        </div>
        <div
          className="Rowflex"
          onClick={() => {
            dispatch({ type: "LABELS" });
          }}
        >
          <EditOutlinedIcon fontSize="large" className="drawer-icons" />
          <span className="DrawerSpan">Edit Labels</span>
        </div>
        <div
          className="Rowflex"
          onClick={() => {
            dispatch({ type: "ARCHIVE" });
            navigate("/archive");
          }}
        >
          <ArchiveOutlinedIcon fontSize="large" className="drawer-icons" />
          <span className="DrawerSpan">Archive</span>
        </div>
        <div
          className="Rowflex"
          onClick={() => {
            dispatch({ type: "DELETE" });
            navigate("/trash");
          }}
        >
          <DeleteOutlineOutlinedIcon
            fontSize="large"
            className="drawer-icons"
          />
          <span className="DrawerSpan">Delete</span>
        </div>
      </div>
    </>
  );
};
export default DrawerExtended;
