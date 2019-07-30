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
          imageProduct: response.data.pictures[0].url,
          productAllInformations: response.data
        })
        this.productCategory();
        this.productDescription();
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
  }

  render() {
    const product = {
      imageProduct: <img className="image-product" src={this.state.imageProduct} alt={this.state.productAllInformations.title} />,
      descriptionParagraph: <p className="description-paragraph">{this.state.productDescription.plain_text}</p>,
      titleProduct: <h2 className="title-product">{this.state.productAllInformations.title}</h2>,
      paidMarket: <div>{this.state.productAllInformations.accepts_mercadopago}</div>,
      descriptionTitle: <h1 className="description-title">Descrição do produto</h1>,
      solds: <h3 id="solds">{this.state.productAllInformations.sold_quantity}</h3>,
      condition: <h3>{this.state.productAllInformations.condition}</h3>,
      categoryProductName: <h2>{this.state.categoryProductName}</h2>,
      price: <h2>{this.state.productAllInformations.price}</h2>,
      buttom: <button className="buy-button">Comprar</button>
    }

    return (
      <>
        <section className="first-section-product-detail product-category">
          <span>{product.categoryProductName}</span>
        </section>

        <section className="second-section-product-detail">
          <div className="row-product-detail">
            <div className="column-image-product-detail">
              <figure className="image-product">{product.imageProduct}</figure>
            </div>

            <div className="column-aux-product-detail">
              <span className="codition-and-solds">
                <div>
                  {product.condition}
                </div>
                <h3>-</h3>
                {product.solds}
                <h3>Vendidos</h3>
              </span>
              <span>{product.titleProduct}</span>
              <div className="price-product"> <h2>$</h2> <div>{product.price}</div></div>
              <div>{product.buttom}</div>
              <h2 className="paid-market">Mercado pago: {product.paidMarket
                ? <span className="paid-market-true">Sim</span>
                : <span className="paid-market-false">Não</span>}
              </h2>
            </div>
          </div>
        </section>

        <section className="third-section-product-detail">
          <span>{product.descriptionTitle}</span>
          <span>{product.descriptionParagraph}</span>
        </section>
      </>
    );
  }
}

export default ProductDetail;