import React from 'react';
import Select from 'react-select';
import { Search, cleaning_services } from "@material-ui/icons";

function ResearchField({ 
  brands,selectedBrand, models, years, yearSelected, selectedModel, yearChange, 
  modelChange, brandChange, clean, search
  }){
    
  
  return (
    <div className='fields'>
      <Select 
        options={brands} 
        className='select' 
        placeholder='Buscar Marca'
        onChange={brandChange}
        value={selectedBrand}
      />
      <Select
        options={models}
        className='select' 
        placeholder='Buscar Modelo'
        onChange={modelChange}
        value={selectedModel}
      />
      <Select
        className='select' 
        placeholder='Buscar Ano'
        options={years}
        value={yearSelected}
        onChange={yearChange}
      />
      <div className='buttons'>
        <button onClick={() => clean()}>Limpar <cleaning_services /></button>
        <button onClick={() => search()}>Pesquisar<Search style={{ color: "#fff" }} /></button>
      </div>
    </div>    
  )
}

export default ResearchField; 