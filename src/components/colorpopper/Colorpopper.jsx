import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import { UpdatecolorApi } from "../../services/dataservice";

export default function Colorpopper({ listenColor, noteId }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const colors = [
    "#2ECC71",
    "#AF7AC5",
    "#F1948A",
    "#A3E4D7",
    "#F5B7B1",
    "#F5B041",
    "#DC7633",
    "#F1C40F",
    "#AAB7B8",
    "#F1948A",
    "#2ECC71",
    "#F5B041",
  ];

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const selectColor = (colour) => {
    let setColor = { _id: noteId, color: colour };
    UpdatecolorApi(setColor)
      .then((response) => {
        console.log(response);
        listenColor();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        className="Note3Symbols"
      >
        <ColorLensOutlinedIcon fontSize="small" />
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box
          sx={{ border: 1, p: 1, bgcolor: "background.paper" }}
          className="colorPalate"
        >
          {colors.map((color) => (
            <div
              style={{
                width: 25,
                height: 25,
                borderRadius: 50,
                backgroundColor: color,
              }}
              onClick={() => selectColor(color)}
            ></div>
          ))}
        </Box>
      </Popper>
    </div>
  );
}
