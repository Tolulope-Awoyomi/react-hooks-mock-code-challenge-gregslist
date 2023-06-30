import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then((listings) => setListings(listings))
  }, [])

  function handleDeleteListing(deletedListing) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id)
    setListings(updatedListings)
  }
  console.log(listings)

  const displayedListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="app">
      <Header setSearchTerm={setSearchTerm}/>
      <ListingsContainer listings={displayedListings} onDeleteListing={handleDeleteListing}/>
    </div>
  );
}

export default App;
