import "./DeleteConfirmationModal.css";

import exitX from "../../images/greyX.png";

function DeleteConfirmationModal({ isOpen, onClose, onConfirm }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={exitX} alt="exit" />
        </button>
        <div className="modal__confirmation-q">
          <h2 className="modal__confirm-title">
            Are you sure you want to delete this item?
          </h2>
          <p className="modal__confirm-warning">This action is irreversible.</p>
        </div>
        <div className="modal__actions">
          <button onClick={onConfirm} className="modal__confirm">
            Yes, delete item
          </button>
          <button onClick={onClose} className="modal__cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
