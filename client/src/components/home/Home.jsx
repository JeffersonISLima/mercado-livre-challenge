import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
    this.callApiMeli = this.callApiMeli.bind(this);
  }

  callApiMeli() {
    axios.get(`http://localhost:5000/api/items`)
      .then((response) => {
        this.setState({
          products: response.data.searchResult
        });
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  componentDidMount() {
    this.callApiMeli();
  }

  render() {
    const randomOffersSecondSection = _.shuffle(this.state.products).slice(0, 4);
    const randomOffersThirdSection = _.shuffle(this.state.products).slice(0, 4);
    return (
      <>
        <section className='first-section'>
          <h1>Ofertas da semana</h1>
        </section>

        <section className='second-section row'>
          {randomOffersSecondSection.map((product, idx) =>
            <>
              <div className="column-aux"></div>

              <div className="column-middle">
                <Link to={`/items/${product.id}`} key={idx}>
                  <figure>
                    <img className="img-thumbnail" src={product.thumbnail} alt={product.title} />
                  </figure>
                  <hr />
                  <h3 className="h5-price">Preço: $ {product.price},00</h3>
                  <h5 className="h5-sold"> Vendidos: {product.sold_quantity}</h5>
                </Link>
                <h5 className="product-title">{product.title}</h5>
              </div>

              <div className="column-aux"></div>
            </>
          )
          }
        </section>

        <section className='third-section'>
          {randomOffersThirdSection.map((product, idx) =>
            <>
              <div className="column-aux"></div>

              <div className="column-middle">
                <Link to={`/items/${product.id}`} key={idx}>
                  <figure>
                    <img className="img-thumbnail" src={product.thumbnail} alt={product.title} />
                  </figure>
                  <hr />
                  <h3 className="h5-price">Preço: $ {product.price}</h3>
                  <h5 className="h5-sold"> Vendidos: {product.sold_quantity}</h5>
                </Link>
                <h5 className="product-title">{product.title}</h5>
              </div>

              <div className="column-aux"></div>
            </>
          )
          }
        </section>
      </>
    );
  }
}

export default Home;