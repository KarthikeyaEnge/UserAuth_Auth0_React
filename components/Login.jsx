import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const login = async () => {
    loginWithRedirect();
  };
  return <button onClick={login}>Log In</button>;
};

export default Login;
