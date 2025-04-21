import "./ItemModal.css";
import exitX from "../../images/greyX.png";

function ItemModal({ onClose, card }) {
  return (
    <div className="modal modal_opened">
      <div className="modal__preview-content model__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__preview-close"
        >
          <img src={exitX} alt="exit" />
        </button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
