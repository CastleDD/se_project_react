import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as api from "../../utils/api";

// import EditProfileModal from "../EditProfileModal/EditProfileModal";
import CurrentUserContext from "../../contexts/currentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import CurrentTempUnitContext from "../../contexts/currentTempUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import { defaultClothingItems } from "../../utils/constants";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import { getItems, addItem, deleteItem } from "../../utils/api";
import { register, login, checkToken } from "../../utils/auth";
import AddItemModal from "../AddItemModal/AddItemModal";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });
  const navigate = useNavigate();
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const handleToggleSwitchChange = () => {
    setCurrentTempUnit(currentTempUnit === "F" ? "C" : "F");
  };

  const openConfirmationModal = (card) => {
    setCardToDelete(card);
    setIsConfirmModalOpen(true);
  };

  const handleCardLike = ({ _id, likes }) => {
    if (!isLoggedIn) {
      setActiveModal("register");
      return;
    }
    const token = localStorage.getItem("jwt");
    const isLiked = likes.some((id) => id === currentUser._id);
    const likeRequest = isLiked ? api.removeCardLike : api.addCardLike;

    likeRequest(_id, token)
      .then((updatedCard) => {
        setClothingItems((items) =>
          items.map((item) => (item._id === _id ? updatedCard : item))
        );
      })
      .catch((err) => console.error(err));
  };

  const handleCardDelete = () => {
    const token = localStorage.getItem("jwt");
    deleteItem(cardToDelete._id, token)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== cardToDelete._id)
        );
        setCardToDelete(null);
        setIsConfirmModalOpen(false);
        closeActiveModal();
      })
      .catch(console.error);
  };
  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleAddClick = () => {
    setActiveModal("add-garment");
  };
  const handleEditProfileClick = () => {
    setActiveModal("editProfile");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };
  const closeAllModals = () => {
    setIsEditProfileOpen(false);
    closeActiveModal();
    setIsConfirmModalOpen(false);
  };
  const handleUpdateUser = ({ name, avatar }) => {
    const token = localStorage.getItem("jwt");
    api
      .updateUserProfile({ name, avatar }, token)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        closeAllModals();
      })
      .catch(console.error);
  };
  const handleEscClose = (e) => {
    if (e.key === "Escape") {
      if (isConfirmModalOpen) {
        setIsConfirmModalOpen(false);
      } else if (activeModal) {
        closeActiveModal();
        setSelectedCard(null);
      }
    }
  };

  useEffect(() => {
    const shouldListen = activeModal || isConfirmModalOpen;
    if (!shouldListen) return;
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal, isConfirmModalOpen]);
  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    const token = localStorage.getItem("jwt");
    addItem({ name, imageUrl, weather }, token)
      .then((newItem) => {
        setClothingItems((prevItems) => [newItem, ...prevItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((userData) => {
          setCurrentUser(userData);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.error("Invalid token", err);
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      setClothingItems([]);
      return;
    }

    const token = localStorage.getItem("jwt");
    if (token) {
      getItems(token)
        .then((data) => {
          console.log(data);
          setClothingItems(data);
        })
        .catch(console.error);
    }
  }, [isLoggedIn]);

  const handleRegister = ({ name, avatar, email, password }) => {
    register({ name, avatar, email, password })
      .then(() => login({ email, password }))
      .then((loginData) => {
        localStorage.setItem("jwt", loginData.token);
        return checkToken(loginData.token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        navigate("/profile");
        closeActiveModal();
      })
      .catch((err) => console.error("Register/Login error", err));
  };
  const handleLogin = ({ email, password }) => {
    login({ email, password })
      .then((loginData) => {
        localStorage.setItem("jwt", loginData.token);
        return checkToken(loginData.token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        navigate("/profile");
        closeActiveModal();
      })
      .catch((err) => console.error("Login error.", err));
  };
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setCurrentUser({});
    setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <CurrentTempUnitContext.Provider
      value={{ currentTempUnit, handleToggleSwitchChange }}
    >
      {" "}
      <CurrentUserContext.Provider value={currentUser}>
        {" "}
        <div className="page">
          {" "}
          <div className="page__content">
            {" "}
            <Header
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              onLoginClick={() => setActiveModal("login")}
              onRegisterClick={() => setActiveModal("register")}
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
            />{" "}
            <Routes>
              {" "}
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    handleCardLike={handleCardLike}
                    clothingItems={clothingItems}
                  />
                }
              />{" "}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    {" "}
                    <Profile
                      clothingItems={clothingItems}
                      onCardClick={handleCardClick}
                      onAddClick={handleAddClick}
                      onEditProfileClick={handleEditProfileClick}
                      onLogoutClick={handleLogout}
                      onCardLike={handleCardLike}
                    />{" "}
                  </ProtectedRoute>
                }
              />{" "}
            </Routes>{" "}
            <Footer />{" "}
          </div>{" "}
          <AddItemModal
            isOpen={activeModal === "add-garment"}
            onClose={closeActiveModal}
            onAddItemModalSubmit={handleAddItemModalSubmit}
            mode="add"
          />{" "}
          <AddItemModal
            isOpen={activeModal === "register"}
            onClose={closeActiveModal}
            onRegister={handleRegister}
            mode="register"
          />{" "}
          <AddItemModal
            isOpen={activeModal === "login"}
            onClose={closeActiveModal}
            onLogin={handleLogin}
            mode="login"
          />{" "}
          <AddItemModal
            isOpen={activeModal === "editProfile"}
            onClose={closeActiveModal}
            onEditProfile={handleUpdateUser}
            currentUser={currentUser}
            mode="editProfile"
          />{" "}
          <ItemModal
            activeModal={activeModal}
            card={selectedCard || {}}
            onClose={closeActiveModal}
            isOpen={activeModal === "preview"}
            onConfirmDelete={openConfirmationModal}
          />{" "}
          <DeleteConfirmationModal
            isOpen={isConfirmModalOpen}
            onClose={() => setIsConfirmModalOpen(false)}
            onConfirm={handleCardDelete}
          />{" "}
        </div>{" "}
      </CurrentUserContext.Provider>{" "}
    </CurrentTempUnitContext.Provider>
  );
}
export default App;
