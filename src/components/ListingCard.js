import React, {useState} from "react";

function ListingCard({description, image, location, listing, onDeleteListing}) {
  const [favorite, setFavorite] = useState(false)

  function makeFavorite() {
    setFavorite(true)
  }

  function makeUnfavorite() {
    setFavorite(false)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteListing(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={makeUnfavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={makeFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
