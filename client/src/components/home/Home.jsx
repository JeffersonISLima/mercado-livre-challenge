import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
    this.callApi = this.callApi.bind(this);
  }

  callApi() {
    axios.get(`http://localhost:5000/api/items`)
      .then((response) => {
        this.setState({ products: response.data});
      })
      .catch((error) => {
        throw new Error(error)
      });
  }

  componentDidMount() {
    this.callApi();
  }

  render() {
   const randomOffers = _.shuffle(this.state.products);
    return (
      <>
        <h1>Ofertas Aleatórias Para Você!</h1>
          {randomOffers.map((product, idx) => <h1 key={idx}>{product.title}</h1>).slice(0, 4)}  
      </>
    );
  }
}

export default Home;