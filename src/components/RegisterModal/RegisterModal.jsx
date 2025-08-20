import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

export default function RegisterModal({ onClose, isOpen, onRegister }) {
  const { values, handleChange, setValues } = useForm({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  useEffect(() => {
    if (isOpen) {
      setValues({
        name: "",
        email: "",
        password: "",
        avatar: "",
      });
    }
  }, [isOpen, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  };

  return (
    <ModalWithForm
      title="Register"
      buttonText="Sign Up"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
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
    </ModalWithForm>
  );
}
