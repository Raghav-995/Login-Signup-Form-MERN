import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = async () => {
    await axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
    });

    navigate("/");
  };

  return (
    <>
      <div style={{alignItems:'center',display: 'flex',
  flexDirection: 'column'}}>
        <h1>Simple Login Form Using MERN STACK</h1><br/>
        <div className="loginForm">
   <label>Enter Name:</label><br/><input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={user.email}
            onChange={handleChange}
          /><br/><br/>
          <label>Enter Password:</label><br/><input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div><br/>
        
          <Button variant="primary" onClick={login}>
            Login
          </Button><h4>Or</h4>
          <Button variant="primary" onClick={() => navigate('/register')}>Register</Button>
        
      </div>
    </>
  );
};
