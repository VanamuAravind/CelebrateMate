import React, { useState } from 'react';
import '../components/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="searchbar">
      <div className="searchbar-container">
        <input
          type="text"
          placeholder="Search friends..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default SearchBar;