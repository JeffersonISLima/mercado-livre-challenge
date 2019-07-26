import React, { Component } from 'react';

// Aqui vou renderizar 4 objetos pesquisados e retornados pelo endpoint - cada objeto terá um link para a view detalhes do produto

class SearchResult extends Component {
  constructor(){
    super();
    this.state = [];
  }

  render(){
    return(
      <>
        <h1>View Resultado da Pesquisa</h1>
      </>
    )
  }
}

export default SearchResult;