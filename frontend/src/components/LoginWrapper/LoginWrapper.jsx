import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import inFormLogo from "./inFormDefaultLogo.png";
import InputBox from "../InputBox/InputBox";
import LoginButton from "../LoginButton/LoginButton";
const LoginWrapper = () => {
  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => console.log(res));
  };
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const boxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
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
            sx={{ fontFamily: "urbanist", fontSize: 36, fontWeight: 400 }}
          >
            inForm
          </Typography>
        </Box>
      </Box>
      <Box sx={{ ...boxStyle }}>
        <Box sx={{ paddingBottom: 1 }}>
          <Typography sx={{ fontSize: 13, paddingBottom: 1 }}>
            Email or Phone Number
          </Typography>
          <InputBox
            variant="text"
            onSubmitFunc={setLoginUsername}
            style={{ paddingBottom: 2 }}
          ></InputBox>
        </Box>
        <Box sx={{ paddingBottom: 1 }}>
          <Typography sx={{ fontSize: 13, paddingBottom: 1 }}>
            Password
          </Typography>
          <InputBox
            variant="password"
            onSubmitFunc={setLoginPassword}
            style={{ paddingBottom: 2 }}
          ></InputBox>
        </Box>
        <LoginButton onClick={login} sx={{ marginBottom: 2 }}>CONTINUE</LoginButton>

        <Box sx={{ paddingBottom: 2 }}>
          <Typography sx={{ fontWeight: 400, fontSize: 11 }}>OR</Typography>
        </Box>
        <LoginButton sx={{ marginBottom: 2 }} google icon auth>
          Continue with Google
        </LoginButton>
        <LoginButton sx={{ marginBottom: 2 }} apple icon auth>
          Continue with Apple
        </LoginButton>
        <hr style={{ maxWidth: 311, width: "100%" }}></hr>
        <Typography sx={{ marginTop: 3, fontSize: 15 }}>
          Create a New Account{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginWrapper;
