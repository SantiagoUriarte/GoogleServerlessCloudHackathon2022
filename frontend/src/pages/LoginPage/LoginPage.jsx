import React from "react";
import { Box } from "@mui/material";
import LoginWrapper from "../../components/LoginWrapper/LoginWrapper";

const LoginPage = () => {
  const loginPageWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
  return (
    <Box sx={{ ...loginPageWrapper }}>
      <LoginWrapper />
    </Box>
  );
};

export default LoginPage;
