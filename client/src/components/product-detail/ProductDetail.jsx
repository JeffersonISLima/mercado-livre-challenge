import React, { Component } from 'react';
import './ProductDetail.css';
import axios from 'axios';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productAllInformations: [],
      categoryProductName: '',
      productDescription: '',
      imageProduct: '',
    }
    this.productInformations = this.productInformations.bind(this);
    this.productDescription = this.productDescription.bind(this);
    this.productCategory = this.productCategory.bind(this);
  }

  productInformations() {
    const { id } = this.props.match.params;
    axios.get(`http://localhost:5000/api/items/${id}`)
      .then((response) => {
        this.setState({
          productAllInformations: response.data,
          imageProduct: response.data.pictures[0].url
        });
        this.productCategory();
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  productDescription() {
    const { id } = this.props.match.params;
    axios.get(`http://localhost:5000/api/items/${id}/description`)
      .then((response) => {
        this.setState({
          productDescription: response.data,
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  productCategory() {
    const { category_id } = this.state.productAllInformations;
    axios.get(`http://localhost:5000/api/category/${category_id}`)
      .then((response) => {
        this.setState({
          categoryProductName: response.data
        })
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  componentDidMount() {
    this.productInformations();
    this.productDescription();
  }

  render() {
    const product = {
      paidMarket: <h2>{this.state.productAllInformations.accepts_mercadopago}</h2>,
      imageProduct: <img src={this.state.imageProduct} alt="Imagem do Produto" />,
      descriptionParagraph: <p>{this.state.productDescription.plain_text}</p>,
      condition: <h6>{this.state.productAllInformations.condition}</h6>,
      solds: <h6>{this.state.productAllInformations.sold_quantity}</h6>,
      titleProduct: <h2>{this.state.productAllInformations.title}</h2>,
      categoryProductName: <h2>{this.state.categoryProductName}</h2>,
      price: <h2>{this.state.productAllInformations.price}</h2>,
      descriptionTitle: <h1>Descrição do produto</h1>,
      buttom: <button>Comprar </button>
    }

    return (
      <>
        <section className="first-section-product-detail product-category border">
          <h1>{product.categoryProductName}</h1>
        </section>

        <section className="second-section-product-detail border">
          <div className="row-product-detail">
            <div className="column-image-product-detail border">
              <figure className="image-product border"> {product.imageProduct} </figure>
            </div>

            <div className="column-aux-product-detail border">
              <span className="row">{product.condition} - {product.solds}</span>
              <span>{product.titleProduct}</span>
              <span>R$ {product.price}</span>
              <div> {product.buttom} </div>
              <h2>Mercado pago: {product.paidMarket
                ? <span className="paid-market-true">Sim</span>
                : <span className="paid-market-false">Não</span>}
              </h2>
            </div>
          </div>
        </section>

        <section className="third-section-product-detail border">
          <span>{product.descriptionTitle}</span>
          <span>{product.descriptionParagraph}</span>
        </section>
      </>
    );
  }
}

export default ProductDetail;