import { Link } from "react-router-dom";
import { useContext } from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/currentUserContext";

function Header({
  handleAddClick,
  weatherData,
  onLoginClick,
  onRegisterClick,
  isLoggedIn,
  currentUser,
}) {
  // const currentUser = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const userInitial = currentUser.name?.charAt(0).toUpperCase();
  const avatarImage = currentUser.avatar || null;

  const renderUserSection = () => {
    if (isLoggedIn && currentUser) {
      return (
        <Link to="/profile" className="header__link">
          <div className="header__user-container">
            <p className="header__username">{userInitial}</p>
            {avatarImage ? (
              <img
                src={avatarImage}
                alt={userInitial}
                className="header__avatar"
              />
            ) : (
              <div className="header__avatar-placeholder">{userInitial}</div>
            )}
          </div>
        </Link>
      );
    } else {
      return (
        <div className="header__auth-buttons">
          <button onClick={onLoginClick}>Log In</button>
          <button onClick={onRegisterClick}>Register</button>
        </div>
      );
    }
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" alt="logo" src={logo} />
      </Link>
      <p className="header__date-lo">
        {currentDate}, {weatherData.city}
      </p>

      <ToggleSwitch />

      {isLoggedIn && (
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add clothes
        </button>
      )}

      {renderUserSection()}
    </header>
  );
}

export default Header;
