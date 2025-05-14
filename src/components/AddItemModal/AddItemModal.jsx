import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
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
      setValues({ name: "", imageUrl: "", weather: "" });
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemModalSubmit(values);
    // setValues({ name: "", imageUrl: "", weather: "" });
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

        <label
          htmlFor="choiceHot"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="choiceHot"
            name="weather"
            type="radio"
            className="modal__radio-input"
            required
            onChange={handleChange}
            value="hot"
            checked={values.weather === "hot"}
          />{" "}
          Hot
        </label>
        <label
          htmlFor="choiceWarm"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="choiceWarm"
            name="weather"
            type="radio"
            className="modal__radio-input"
            required
            onChange={handleChange}
            value="warm"
            checked={values.weather === "warm"}
          />{" "}
          Warm
        </label>
        <label
          htmlFor="choiceCold"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="choiceCold"
            name="weather"
            type="radio"
            className="modal__radio-input"
            required
            onChange={handleChange}
            value="cold"
            checked={values.weather === "cold"}
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
