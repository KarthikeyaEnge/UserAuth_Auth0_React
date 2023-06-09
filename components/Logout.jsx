import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <>
      <button onClick={() => logout()}>Log out</button>
    </>
  );
};

export default Logout;
