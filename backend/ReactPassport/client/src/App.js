import React, { useState } from "react";
import Axios from "axios";
import { LoginButton } from "./LoginButton/LoginButton"

function App() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerCompany, setRegisterCompany] = useState("");
  const [registerAccountLevel, setRegisterAccountLevel] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
        name: registerName,
        company: registerCompany,
        accountLevel: registerAccountLevel,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
  };
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
  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  const logout = () => {
    Axios({
      method: "POST",
      withCredentials: true,
      url: "http://localhost:4000/logout",
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <loginButton>Continue</loginButton>
      <div className="App">
        <div>
          <h1>Register</h1>
          <input
            placeholder="Username"
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <input
            placeholder="Name"
            onChange={(e) => setRegisterName(e.target.value)}
          />
          <input
            placeholder="Company"
            onChange={(e) => setRegisterCompany(e.target.value)}
          />
          <input
            placeholder="Account Level"
            onChange={(e) => setRegisterAccountLevel(e.target.value)}
          />
          <button onClick={register}>Submit</button>
        </div>

        <div>
          <h1>Login</h1>
          <input
            placeholder="username"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <input
            placeholder="password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button onClick={login}>Submit</button>
        </div>

        <div>
          <h1>Get User</h1>
          <button onClick={getUser}>Submit</button>
          {data ? <h1>Welcome Back {data.username}</h1> : null}
        </div>

        <div>
          <h1>Logout</h1>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </>
  );
}

export default App;
