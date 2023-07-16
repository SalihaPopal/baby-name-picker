//     Level one

// import React, { useState, useEffect } from 'react';
// import data from './babyNamesData.json';
// import './App.css';

// const BabyNamesApp = () => {
//   const [names, setNames] = useState([]);

//   useEffect(() => {
//     // Sort the names in alphabetical order
//     const sortedNames = data.sort((a, b) => a.name.localeCompare(b.name));
//     setNames(sortedNames);
//   }, []);

//   return (
//     <div className="baby-names-container">
//       <div className="name-list">
//         {names.map((name) => (
//           <div
//             key={name.id} className="name-item"
//             style={{
//             backgroundColor: name.sex === 'f' ? 'lightpink' : 'lightblue'}}
//           >
//             {name.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BabyNamesApp;