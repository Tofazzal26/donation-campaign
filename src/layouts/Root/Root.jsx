import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/NavBar/NavBar";
import "./Root.css";

const Root = () => {
  return (
    <div className="inter-font">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Root;
