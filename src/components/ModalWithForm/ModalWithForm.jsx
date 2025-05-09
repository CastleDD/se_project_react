import "./ModalWithForm.css";
import greyX from "../../images/greyX.png";

function ModalWithForm({
  children,
  buttonText,
  title,
  name,
  onClose,
  isOpen,
  onSubmit,
}) {
  // if (!isOpen) return null;

  return (
    <div className={`modal  ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={greyX} alt="exit" />
        </button>
        <form onSubmit={onSubmit} className="modal__form" name={name}>
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
