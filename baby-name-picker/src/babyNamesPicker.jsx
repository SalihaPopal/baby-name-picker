// import React, {useState} from 'react'
// import data from './babyNamesData.json';


// const SearchNames = () => {
//   const [searchInput, setSearchInput] = useState("");

//   const handleChange = (e) => {
//     e.preventDefault();
//     setSearchInput(e.target.value.toLowerCase());

//     if(searchInput > 0 ){
//       data.filter((name) => (
//         name.name.match(searchInput)
//       ));
//     }
//   }  
//   return (
//     <div className="baby-names-container">
//       <input type = "search" placeholder="Search for a name..." className='input' value={searchInput} onChange={handleChange}/>
//       <ul>
//       {data.map((name, index) => (
//         <li key={index}>{name}</li>
//       ))}
//       </ul>
//     </div>
    
//   )   
// }

// export default SearchNames;