import "./SideBar.css";
import avatar from "../../images/avatar.png";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="Default avatar" />
      <p className="sidebar__username">SB</p>
    </div>
  );
}

export default SideBar;
