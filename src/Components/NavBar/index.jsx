import React from 'react';
import { DirectionsCarRounded } from '@mui/icons-material';

function NavBar() {
  return(
    <nav className='nav-bar'> 
      <DirectionsCarRounded className='icon-car' />
      <label>TABELA FIPE</label>
    </nav>
  )
}

export default NavBar;