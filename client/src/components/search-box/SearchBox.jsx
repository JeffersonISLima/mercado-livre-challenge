import React, { Component } from "react";
import './SearchBox.css';

class SearchBox extends Component {
  constructor() {
    super();
  }

  render() {
    const searchBar = {
      logo: <img src="../images/logo.png" alt="lupa" alt="Imagem de uma lupa na barra de pesquisa." />,
      lupa: <img className="img-lupa" src="../images/lupa.png" alt="lupa" alt="Imagem de uma lupa na barra de pesquisa." />,
      input: <input type="search" name="search" placeholder="Buscar produtos, marcas e muito mais..." />
    };

    return (
      <>
        <div className='search-box'>
          {searchBar.logo}
          <div className='search-input-container'>
            <form action="" className='input-field'>
              {searchBar.input}
              {searchBar.lupa}
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default SearchBox;
