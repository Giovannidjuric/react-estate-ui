import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";

function Layout() {
  console.log('rendering Layout');
  return (
    <div className="layout">
      <div className="navbar">
      <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function RequireAuth() {
  const currentUser = useContext(AuthContext);
  console.log('logging', currentUser.authContext);

  return (
    !currentUser.authContext ? (<Navigate to={"/login"} />)
    :
    (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>)
  );
}

export { Layout, RequireAuth };
