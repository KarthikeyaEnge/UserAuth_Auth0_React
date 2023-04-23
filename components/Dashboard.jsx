import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Dashboard = () => {
  const { user } = useAuth0();
  return (
    <section>
      <h1>{user.name}</h1>
    </section>
  );
};

export default Dashboard;
