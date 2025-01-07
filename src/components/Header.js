import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between px-10 shadow-md sticky top-0 bg-green-50">
      <img className="w-24 h-24" src={LOGO_URL} />
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4 ">{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 hover:text-green-600">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-green-600">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 hover:text-green-600">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 hover:text-green-600">Cart</li>
          <li className="px-4 hover:text-green-600">
            <button
              onClick={() => {
                btnName === "Login"
                  ? setbtnName("Logout")
                  : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
