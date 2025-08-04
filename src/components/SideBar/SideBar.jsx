import { useContext } from "react";
import CurrentUserContext from "../../contexts/currentUserContext";
import "./SideBar.css";
import avatar from "../../images/avatar.png";

function SideBar({ onEditProfile, onLogout }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img
          className="sidebar__avatar"
          src={currentUser.avatar || avatar}
          alt="User avatar"
        />
        <p className="sidebar__username">{currentUser.name || "User"}</p>
      </div>

      <div className="sidebar__actions">
        <button className="sidebar__edit-btn" onClick={onEditProfile}>
          Edit Profile
        </button>
        <button className="sidebar__logout-btn" onClick={onLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
