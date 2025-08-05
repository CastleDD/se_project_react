import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState, useContext } from "react";
import { useForm } from "../../hooks/useForm";
import CurrentUserContext from "../../contexts/currentUserContext";

export default function AddItemModal({
  onClose,
  isOpen,
  onAddItemModalSubmit,
  onRegister,
  onLogin,
  onEditProfile,
  mode,
}) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, setValues } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
    email: "",
    password: "",
    avatar: "",
  });

  // const [profileName, setProfileName] = useState("");
  // const [profileAvatar, setProfileAvatar] = useState("");

  useEffect(() => {
    if (isOpen) {
      if (mode === "editProfile" && currentUser) {
        setValues({
          name: currentUser.name || "",
          avatar: currentUser.avatar || "",
        });
      } else {
        setValues({
          name: "",
          imageUrl: "",
          weather: "",
          email: "",
          password: "",
          avatar: "",
        });
      }
    }
  }, [isOpen, mode, currentUser, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "add") {
      onAddItemModalSubmit(values);
    } else if (mode === "register") {
      onRegister(values);
    } else if (mode === "login") {
      onLogin(values);
    } else if (mode === "editProfile") {
      onEditProfile(values);
    }
  };

  return (
    <ModalWithForm
      title={
        mode === "register"
          ? "Register"
          : mode === "login"
          ? "Log In"
          : mode === "editProfile"
          ? "Edit Profile"
          : "New garment"
      }
      buttonText={
        mode === "register"
          ? "Sign Up"
          : mode === "login"
          ? "Login"
          : mode === "editProfile"
          ? "Save"
          : "Add garment"
      }
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      {mode === "register" && (
        <>
          <label className="modal__label">
            Name
            <input
              type="text"
              className="modal__input"
              name="name"
              minLength="1"
              maxLength="30"
              required
              value={values.name}
              onChange={handleChange}
            />
          </label>
          <label className="modal__label">
            Email
            <input
              type="email"
              className="modal__input"
              name="email"
              required
              value={values.email}
              onChange={handleChange}
            />
          </label>
          <label className="modal__label">
            Password
            <input
              type="password"
              className="modal__input"
              name="password"
              required
              minLength="3"
              maxLength="30"
              value={values.password}
              onChange={handleChange}
            />
          </label>
          <label className="modal__label">
            Avatar
            <input
              type="url"
              className="modal__input"
              name="avatar"
              required
              value={values.avatar}
              onChange={handleChange}
            />
          </label>
        </>
      )}

      {mode === "login" && (
        <>
          <label className="modal__label">
            Email
            <input
              type="email"
              className="modal__input"
              name="email"
              required
              value={values.email}
              onChange={handleChange}
            />
          </label>
          <label className="modal__label">
            Password
            <input
              type="password"
              className="modal__input"
              name="password"
              required
              value={values.password}
              onChange={handleChange}
            />
          </label>
        </>
      )}

      {mode === "editProfile" && (
        <>
          <label className="modal__label">
            Name
            <input
              type="text"
              className="modal__input"
              name="name"
              value={values.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="modal__label">
            Avatar
            <input
              type="url"
              className="modal__input"
              name="avatar"
              value={values.avatar}
              onChange={handleChange}
              required
            />
          </label>
        </>
      )}

      {mode === "add" && (
        <>
          <label htmlFor="name" className="modal__label">
            Name{" "}
            <input
              type="text"
              className="modal__input"
              id="name"
              name="name"
              placeholder="Name"
              required
              minLength="1"
              maxLength="30"
              onChange={handleChange}
              value={values.name}
            />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image{" "}
            <input
              type="url"
              className="modal__input"
              id="imageUrl"
              name="imageUrl"
              placeholder="Image URL"
              required
              onChange={handleChange}
              value={values.imageUrl}
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            {["hot", "warm", "cold"].map((temp) => (
              <label
                key={temp}
                htmlFor={`choice${temp}`}
                className="modal__label modal__label_type_radio"
              >
                <input
                  id={`choice${temp}`}
                  name="weather"
                  type="radio"
                  className="modal__radio-input"
                  required
                  value={temp}
                  checked={values.weather === temp}
                  onChange={handleChange}
                />
                {temp.charAt(0).toUpperCase() + temp.slice(1)}
              </label>
            ))}
          </fieldset>
        </>
      )}
    </ModalWithForm>
  );
}
