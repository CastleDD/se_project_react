import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/currentUserContext";

function ClothesSection({
  onCardClick,
  clothingItems,
  onAddClick,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);
  const userItems = clothingItems.filter(
    (item) => item.owner === currentUser._id
  );

  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">Your Items</p>
        <button onClick={onAddClick} className="clothes-section-add-btn">
          {" "}
          + Add New
        </button>
      </div>
      <ul className="clothes-section__list">
        {userItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
          />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
