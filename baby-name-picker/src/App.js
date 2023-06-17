import React from "react";
import data from './babyNamesData.json';

function BabyNames() {
    return (
      <div className="App">
        {data.map((element, index) => (
          <span>{element.name} </span>
        ))}
      </div>
    );
}

export default BabyNames;
