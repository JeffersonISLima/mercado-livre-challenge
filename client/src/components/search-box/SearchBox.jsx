import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SearchBox.css';

class SearchBox extends Component {
	constructor() {
		super();
		this.state = {
			titleProduct: [],
			product: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		event.preventDefault();
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	}

	render() {
		const searchBar = {
			input: <input type="search" name="product" value={this.state.product} placeholder="Buscar produtos, marcas e muito mais..." onChange={e => this.handleChange(e)} />,
			freeShipping: <img src="../images/free-shipping.png" alt="Imagem de um caminhão informando o frete grátis." />,
			logo: <img src="../images/logo.png" title="Home Page" alt="Imagem do logotipo do mercado livre." />,
			url: 'http://localhost:3000/items',
			urlObject: window.location.href
		}

		if (this.state.product.length !== 0) {
			const { product } = this.state;
			axios.get(`http://localhost:5000/api/items?search=${ product }`)
				.then((response) => {
					this.setState({
						categoryProducty: response.data.categoryName,
						titleProduct: response.data.searchResult
					});
				})
				.catch((error) => {
					throw new Error(error);
				});
		}

		if ((this.state.product.length !== 0) && (searchBar.urlObject === searchBar.url)) {
			return (
				<>
					<section className='search-box'>
						<Link to='/'>
							<figure>{searchBar.logo}</figure>
						</Link>
						<div className='search-input-container'>
							<Link to='/items'>
								<div className='input-field'>
									{searchBar.input}
									<i className="fas fa-search"></i>
								</div>
							</Link>
						</div>
					</section>

					<section className="second-section-search-box">
						<div className="product-category">
							<div>
								<h2>{this.state.categoryProducty}</h2>
							</div>
						</div>
					</section>

					<section className="third-section-search-box">
						{this.state.titleProduct.map((product, idx) =>
							<>
								<Link to={`/items/${product.id}`}>
									<div className="card row" key={idx}>
										<div className="column-aux">
											<img className='images' src={product.thumbnail} alt={product.title} />
										</div>

										<div className="column-middle-search-box">
											<div> <h2>$ {product.price}</h2> {product.shipping.free_shipping ? <figure>{searchBar.freeShipping}</figure> : ''}</div>
											<h4>{product.title}</h4>
										</div>

										<div className="column-aux" id="column-aux">
											<h4>{product.address.city_name.toUpperCase()}</h4>
										</div>
									</div>
								</Link>
							</>
						).slice(0, 4)
						}
					</section>
				</>
			)
		} else {
			return (
				<>
					<section className='search-box'>
						<Link to='/'>
							<figure>{searchBar.logo}</figure>
						</Link>
						<div className='search-input-container'>
							<Link to='/items'>
								<div className='input-field'>
									{searchBar.input}
									<i className="fas fa-search"></i>
								</div>
							</Link>
						</div>
					</section>
				</>
			)
		}
	}
}

export default SearchBox;