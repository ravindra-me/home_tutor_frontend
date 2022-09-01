// Import required libraries
import React, { useState } from "react";
import { Dialog } from "@mui/material";
import { makeStyles } from "@mui/styles";
// Import utils

// Import action creators

// Import styles

const dialogUseStyles = makeStyles({
  dialog: {
    fontFamily: "Hind Siliguri",
    fontSize: 14,
    padding: "15px",
    "& .MuiDialog-paperWidthSm": {
      maxWidth: "850px",
      //minHeight: "300px",
      height: "auto",
      maxHeight: "700px",
      padding: "15px",
    },
  },
});

function Modal(props: any) {
  let { modalComponent, setModalComponent, handleDialogClose } = props;
  const dialogClass = dialogUseStyles();

  return (
    <Dialog
      className={dialogClass.dialog}
      onClose={handleDialogClose}
      aria-labelledby="simple-dialog-title"
      open={modalComponent.open}
    >
      {modalComponent.component}
    </Dialog>
  );
}

export default Modal;
