import "./ItemModal.css";
import exitX from "../../images/greyX.png";

function ItemModal({ onClose, card, isOpen, onConfirmDelete }) {
  return (
    <div className={`modal  ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__preview-content model__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__preview-close"
        >
          <img src={exitX} alt="exit" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__container">
            <h2 className="modal__caption">{card.name}</h2>
            <button
              className="modal__delete-btn"
              onClick={() => onConfirmDelete(card)}
            >
              Delete Item
            </button>
          </div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
