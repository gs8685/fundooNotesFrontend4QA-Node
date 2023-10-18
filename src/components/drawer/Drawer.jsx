import React from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./drawer.css";
const Drawer = () => {
  return (
    <>
      <div className="drawer-main-container">
        <LightbulbOutlinedIcon fontSize="large" className="drawer-icons" />
        <NotificationsNoneOutlinedIcon
          fontSize="large"
          className="drawer-icons"
        />
        <EditOutlinedIcon fontSize="large" className="drawer-icons" />
        <ArchiveOutlinedIcon fontSize="large" className="drawer-icons" />
        <DeleteOutlineOutlinedIcon fontSize="large" className="drawer-icons" />
      </div>
    </>
  );
};

export default Drawer;
