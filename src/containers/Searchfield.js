import React from "react";

const Searchfield = ({searchchange}) => {
    return(
        <div>
            <input 
            type="text" 
            placeholder="search" 
            className="outline-transparent pa4 pl2 pr2 grow br3 mt5 mb5 shadow-3"
            onChange={searchchange}></input>
        </div>
    );
}

export default Searchfield;