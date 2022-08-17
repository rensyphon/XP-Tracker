import React from 'react';
import { useState } from 'react';

function NewSearchBar(props) {
  const { onSearch } = props;

  const [searchText, setSearchText] = useState("");

  const handleInput = (e) => {
    const text = e.target.value
    setSearchText(searchText)
  }

  const handleEnterKeyPressed = (e) => {
    if (e.keyCode === 'Enter'){
      onSearch(searchText);
    }
  } 
  return (
    <div>
      <div className='control'>
        <input 
        className='input' 
        onChange={handleInput} 
        onKeyPress={handleEnterKeyPressed} 
        type="text" 
        value={searchText} 
        placeholder="Search your game"
        ></input>
      </div>
    </div>
  )
}

export default NewSearchBar