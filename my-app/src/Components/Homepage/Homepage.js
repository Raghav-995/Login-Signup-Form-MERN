import React from "react";
import { Button } from "react-bootstrap";

export const Homepage = ({setLoginUser}) => {
  return (
    <>
      <div style={{ display: 'flex',
  flexDirection: 'column',alignItems:'center'
  }}>
        <h1>'Welcome' This is the HomePage. </h1>
<h2> This is the successfull Connection with MERN.</h2>
     
      <Button onClick={() => setLoginUser({})}>Logout</Button> </div>
    </>
  );
};
