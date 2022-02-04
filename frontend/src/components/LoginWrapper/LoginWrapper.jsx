import React, { useState } from "react";
import Axios from "axios";
import { Box, Typography, TextField } from "@mui/material";
import inFormLogo from "./inFormDefaultLogo.png";
import LoginButton from "../LoginButton/LoginButton";
import SearchBox from "../SearchBox/SearchBox";
const LoginWrapper = () => {
  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/login",
    }).then((res) => {
      console.log(res);
      window.location = "/";
    });
  };

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: 4,
        }}
      >
        <Box>
          <img
            style={{ width: 70, height: 72, marginLeft: 10 }}
            src={inFormLogo}
            alt="inForm Logo"
          />
        </Box>
        <Box
          sx={{
            fontFamily: "urbanist",
            fontWeight: 400,
            fontSize: 36,
            lineHeight: "43px",
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontFamily: "urbanist",
              fontSize: 36,
              fontWeight: 400,
              color: "white",
            }}
          >
            inForm
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ paddingBottom: 1 }}>
          <Typography sx={{ fontSize: 13, paddingBottom: 1, color: "white" }}>
            Email or Phone Number
          </Typography>
          <SearchBox onSubmitFunc={setLoginUsername}></SearchBox>
        </Box>
        <Box sx={{ paddingBottom: 1 }}>
          <Typography sx={{ fontSize: 13, paddingBottom: 1, color: "white" }}>
            Password
          </Typography>
          <SearchBox
            style={{ marginBottom: 2 }}
            onSubmitFunc={setLoginPassword}
          ></SearchBox>
        </Box>
        <LoginButton onClick={login} sx={{ marginBottom: 2 }}>
          CONTINUE
        </LoginButton>

        <Box sx={{ paddingBottom: 2 }}>
          <Typography sx={{ fontWeight: 400, fontSize: 11, color: "white" }}>
            OR
          </Typography>
        </Box>
        <LoginButton sx={{ marginBottom: 2 }} google icon auth>
          Continue with Google
        </LoginButton>
        <LoginButton sx={{ marginBottom: 2 }} apple icon auth>
          Continue with Apple
        </LoginButton>
        <hr style={{ maxWidth: 311, width: "100%" }}></hr>
        <Typography sx={{ marginTop: 3, fontSize: 15, color: "white" }}>
          Create a New Account
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginWrapper;
