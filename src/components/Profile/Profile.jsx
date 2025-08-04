import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  onCardClick,
  clothingItems,
  onAddClick,
  onEditProfileClick,
  onLogoutClick,
  onCardLike,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar onEditProfile={onEditProfileClick} onLogout={onLogoutClick} />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          clothingItems={clothingItems}
          onCardClick={onCardClick}
          onAddClick={onAddClick}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
