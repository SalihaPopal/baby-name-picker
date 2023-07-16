
//   level 2
// import React, { useState, useEffect } from 'react';
// import data from './babyNamesData.json';
// import './App.css';

// const BabyNamesApp = () => {
//   const [searchTerm, setSearchTerm] = useState('');
// const [filteredNames, setFilteredNames] = useState([]);


// const handleSearch = (e) => {
//   setSearchTerm(e.target.value);
// };

// useEffect(() => {
//   const filtered = data.filter((name) =>  name.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   setFilteredNames(filtered);
// }, [searchTerm]);

// return (
//   <div className="baby-names-container">
//     <div className="input">
//       <input
//         type="text"
//         placeholder="Search for a name..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//     </div>
//     <div className="name-list">
//       {filteredNames.map((name) => (
//         <div
//           key={name.id}
//           className="name-item"
//           style={{
//             backgroundColor: name.sex === 'f' ? 'lightpink' : 'lightblue',
//           }}
//         >
//           {name.name} 
//         </div>
//       ))}
//     </div> 
//   </div>
  
//   );
// }
// export default BabyNamesApp;
