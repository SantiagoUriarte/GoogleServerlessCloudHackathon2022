import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { headerFont } from "../../../src/theme";
const InstructionModal = ({
  open,
  handleClose,
  header,
  children,
  buttonText,
  style,
}) => {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "10px",
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: headerFont,
    gap: "20px",
  };
  const buttonStyle = {
    maxWidth: 273,
    width: "100%",
    borderRadius: "30px",
    boxShadow: 5,
    cursor: "pointer",
  };
  const headerStyle = {
    fontFamily: headerFont,
    fontWeight: 600,
    fontSize: 21,
    lineHeight: "25px",
  };
  const descriptionStyle = {
    fontFamily: headerFont,
    textAlign: "left",
  };
  const headerWrapperStyle = {
    textAlign: "center",
    "@media screen and (max-width: 736px)": {
      width: 235,
    },
  };
  const dontShowStyle = {
    textDecoration: "underline",
  };
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...modalStyle }}>
        <Box sx={{ ...headerWrapperStyle }}>
          <Typography id="modal-modal-title" sx={{ ...headerStyle }}>
            {header}
          </Typography>
        </Box>
        <Typography id="modal-modal-description" sx={{ ...descriptionStyle }}>
          {children}
        </Typography>
        <Button
          sx={{ ...buttonStyle }}
          variant="contained"
          onClick={handleClose}
        >
          {buttonText}
        </Button>
        <Typography sx={{ ...dontShowStyle }}>
          Don't show me this again
        </Typography>
      </Box>
    </Modal>
  );
};

export default InstructionModal;
