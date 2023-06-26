import React from 'react';
import data from "./babyNamesData"

const BabyNames = () =>{
  return (
    <div>
        {data.map((element) => 
          <span>{element.name}</span>
        )}
    </div>
  );
}

export default BabyNames;