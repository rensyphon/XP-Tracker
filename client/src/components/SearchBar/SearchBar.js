import React, { useState } from 'react';
import './SearchBar.css';
import SearchBar from "material-ui-search-bar";
import { ThemeProvider } from '@mui/material/styles'
// import logo from '..//..//assets/images/xp-tracker-logo.png';

const logo = require('./assets/images/xp-tracker-logo.png'); 


export default function SearchBar() {

    const [searchItem, setSearchItem] = useState("");
    
    return (
<>
    <div className="box">
    <div >
      <figure >
        <img className="logo-img" src={ logo.default } alt='logo'/>
      </figure>
      <ThemeProvider>
      <div className="main-content">
 
        <SearchBar
          value={searchItem}
          onChange={value => {
            setSearchItem(value);
          }}
          onRequestSearch={() => console.log("onRequestSearch")}
          style={{
            margin: "0 auto",
            maxWidth: 900
          }}
        />
      </div>
    </ThemeProvider>
    </div>
    </div>
</>
    )
}