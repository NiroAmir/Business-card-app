import { Button, IconButton } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";

const ButtonComponent = () => {
  return (
    <>
      <Button
        variant="contained"
        color="success"
        size="small"
        endIcon={<SendIcon />}
      >
        Send!
      </Button>{" "}
      <Button variant="outlined" color="primary" endIcon={<ShareIcon />}>
        Share!
      </Button>
      <Button variant="outlined" color="success" disabled>
        Click Here!
      </Button>
      <IconButton aria-label="Delete">
        <DeleteIcon />
      </IconButton>
    </>
  );
};
export default ButtonComponent;
