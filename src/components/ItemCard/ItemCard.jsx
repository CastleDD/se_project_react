import { useContext } from "react";
import CurrentUserContext from "../../contexts/currentUserContext";
import "./ItemCard.css";
import unheart from "../../images/unheart.png";
import hearted from "../../images/hearted.png";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes.includes(currentUser._id);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleCardLike = () => {
    onCardLike(item);
  };

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
      <button
        className={`card__like-btn ${isLiked ? "card__like-btn_active" : ""}`}
        onClick={handleCardLike}
      >
        <img
          src={isLiked ? hearted : unheart}
          alt={isLiked ? "liked" : "unliked"}
        />
      </button>
    </li>
  );
}
export default ItemCard;
