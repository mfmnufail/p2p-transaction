import React from "react";
import { Menu} from "semantic-ui-react";
import { Link } from "react-router-dom";



const Menubar = (props) => {


  function handleItemClick() {
    return "null";
  }

  return (
    <Menu color='blue' stackable>
      <Link to="/home">
        <Menu.Item name="home" onClick={handleItemClick}>
          Home
        </Menu.Item>
      </Link>

      <Link to="/login">
        <Menu.Item name="ipfs" onClick={handleItemClick}>
          Transaction
        </Menu.Item>
      </Link>
      <Link to="/login">
        <Menu.Item name="logout" onClick={() => localStorage.clear()}>
          Logout
        </Menu.Item>
      </Link>
    </Menu>
  
  );
};

export default Menubar;
