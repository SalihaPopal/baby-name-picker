// import React from 'react';
// import data from "./babyNamesData"
import './App.css';


// const BabyNames = () =>{  
//   return (
//     <div className="baby-name-picker">
//       {/* <input type="text" className="input" placeholder="Enter a baby name"/> */}
      
//       <div className="baby-names-container">
//       {data.map((name, index) => (
//       <div className='baby-name' key={index}
//       style={{
//         backgroundColor: name.sex === 'f' ? 'lightpink' : 'lightblue'}}>
//         {name.name}
//       </div>
//       ))}
//     </div>
//     </div>
//   );
// }

// export default BabyNames;



// import React, { useState, useEffect } from 'react';
// import data from './babyNamesData.json';
// import './App.css';

// const BabyNamesPicker = () => {
//   const [names, setNames] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setNames(data.map((item) => item.name).sort());
//   }, []);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredNames = names.filter((name) =>
//     name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="baby-name-picker">  
//       <input
//         type="text"
//         placeholder="Search names..."
//         value={searchTerm}
//         onChange={handleSearch}
//         className="input"
//       />

//       <div className="baby-names-container">
//       {/* {data.map((name, index) => (
//       <div className='baby-name' key={index}
//       style={{
//         backgroundColor: name.sex === 'f' ? 'lightpink' : 'lightblue'}}>
//         {name.name}   */}
//         {filteredNames.map((name, index) => (
//           <div key={index} className="baby-name" style={{
//         backgroundColor: name.sex === 'f' ? 'lightpink' : 'lightblue'}}>
//             {name}
//           </div>
//         ))}
//       </div>
      
//     </div>
//   );
// };

// export default BabyNamesPicker;



import React, { useState, useEffect } from 'react';
import data from './babyNamesData.json';
import './App.css';

const BabyNamesApp = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    // Sort the names in alphabetical order
    const sortedNames = data.sort((a, b) => a.name.localeCompare(b.name));
    setNames(sortedNames);
  }, []);

  return (
    <div className="baby-names-container">
      <div className="name-list">
        {names.map((name) => (
          <div
            key={name.id} className="name-item"
            style={{
            backgroundColor: name.sex === 'f' ? 'lightpink' : 'lightblue'}}
          >
            {name.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BabyNamesApp;
