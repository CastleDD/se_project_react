import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState, useContext } from "react";
import { useForm } from "../../hooks/useForm";

export default function AddItemModal({
  onClose,
  isOpen,
  onAddItemModalSubmit,
}) {
  const { values, handleChange, setValues } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  useEffect(() => {
    if (isOpen) {
      setValues({
        name: "",
        imageUrl: "",
        weather: "",
      });
    }
  }, [isOpen, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemModalSubmit(values);
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
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
    </ModalWithForm>
  );
}
