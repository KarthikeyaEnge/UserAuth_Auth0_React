import "./App.css";
import Login from "../components/Login";
import Logout from "../components/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "../components/Dashboard";
import { useEffect } from "react";
function App() {
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    console.log(isAuthenticated);
  }, []);

  return (
    <main className="App">
      <h1>Auth0 Authentication</h1>
      {!isAuthenticated ? (
        <Login />
      ) : (
        <>
          <h3>LoggedIn</h3>
          <Dashboard />
        </>
      )}
      {/* {isAuthenticated && <Logout />} */}
      <Logout />
    </main>
  );
}

export default App;
