"use client";

import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};

  return (
    <form className="searchbar " onSubmit={handleSearch}>
      <div className="searchBar__item">
        <SearchManufacturer
          setManufacturer={setManufacturer}
          manufacturer={manufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
