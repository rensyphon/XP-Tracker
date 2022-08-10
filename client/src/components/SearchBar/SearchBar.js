import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './SearchBar.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function SearchBar() {
    return (
<>
<div class="box">
    <div class="control columns is-vcentered">
      <figure class="image is-3">
        <img class="is-rounded" src="//xplogo" />
      </figure>
      <TextField classname='text-area'id="outlined-basic" label="search for game" variant="outlined" />
      <Stack spacing={2} direction="row">
      <Button variant="text">search</Button>

    </Stack>
    </div>
    </div>
</>
    )
}