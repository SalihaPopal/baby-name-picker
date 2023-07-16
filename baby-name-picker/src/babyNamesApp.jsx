//    level 4
import React, { useState, useEffect } from 'react';
import data from './babyNamesData.json';
import './App.css';

const BabyNamesApp = () => {
const [searchTerm, setSearchTerm] = useState('');
const [filteredNames, setFilteredNames] = useState([]);
const [favorite, setFavorites] = useState([]);
const [nameGenderFilter, setNameGenderFilter] = useState("all");


const handleSearch = (e) => {
  setSearchTerm(e.target.value);
};

useEffect(() => {
  const filtered = data.filter((name) =>  name.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredNames(filtered);
}, [searchTerm]);

const handleAddToFavorites = (name) => {
  setFavorites([...favorite, name]);
  setFilteredNames(filteredNames.filter((name) => name.name !== name));
}

const handleRemoveFavorites = (name) => {
  setFilteredNames([...favorite, name]);
  setFavorites(favorite.filter((name) => name.name !== name));
}

const handleGenderFilter = (gender) => {
  setNameGenderFilter(gender);
  if(gender === "all") {
    setFilteredNames(data.filter((name) =>    name.name.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  } else {
    setFilteredNames(data.filter((name) => 
 name.name.toLowerCase().includes(searchTerm.toLowerCase()) && name.sex === gender
    ));
  }
}
return (
  <div className="baby-names-container">
    <div className="input">
      <input
        type="text"
        placeholder="Search for a name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button id='all'
      className = {nameGenderFilter === "all" ? "active" : ""}
      onClick={handleGenderFilter}>
       all
      </button>
      <button id='f'
      className={nameGenderFilter === "f" ? "active" : ""}
      onClick={handleGenderFilter}>
        girl
      </button>
      <button id='m'
      className={nameGenderFilter === "m" ? "active" : ""}
      onClick={handleGenderFilter}>
        boy
        </button>
        </div>
    <div className="favorite-name-list"> 
    <p>Favorite:</p>
    {favorite.map((name)=>
    <div
    key={name.id}
    className="name-item"
    style = {{
      backgroundColor: name.sex === "f" ? "lightpink" : "lightblue",
    }}
    onClick={() => handleRemoveFavorites(name)}
    >
    {name.name}
    </div>
    )}
  </div>
    <div className="name-list">
      {filteredNames.map((name) => (
        <div
          key={name.id}
          className="name-item"
          style={{
            backgroundColor: name.sex === 'f' ? 'lightpink' : 'lightblue',
          }}
          onClick={() => handleAddToFavorites(name)}
        >
          {name.name} 
        </div>
      ))}
    </div>
  </div>
  );
}
export default BabyNamesApp;
