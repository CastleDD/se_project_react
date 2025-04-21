import "./ModalWithForm.css";
import greyX from "../../images/greyX.png";

function ModalWithForm({ children, buttonText, title, onClose }) {
  return (
    <div className="modal modal_opened">
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={greyX} alt="exit" />
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
