import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SearchBox.css';

class SearchBox extends Component {
	constructor() {
		super();
		this.state = {
			product: '',
			titleProduct: [],
			categoryProducty: []
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
		if (this.state.product.length !== 0) {
			axios.get(`http://localhost:5000/api/items?search=${this.state.product.toUpperCase()}`)
				.then((response) => {
					this.setState({
						titleProduct: response.data,
					})
// Axios - Chamar neste local a MeLiApi para obter a categoria do produtos 
				})
				.catch((error) => {
					throw new Error(error);
				});
		}

		const searchBar = {
			logo: <img src="../images/logo.png" title="Home Page" alt="Imagem do logotipo do mercado livre." />,
			input: <input type="search" name="product" value={this.state.product} placeholder="Buscar produtos, marcas e muito mais..." onChange={e => this.handleChange(e)} />,
			url: 'http://localhost:3000/items',
			urlObject: window.location.href
		}

		if ((this.state.product.length !== 0) && (searchBar.urlObject === searchBar.url)) {
			return (
				<div>
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

					<section>
						<div className="categoria border">
							<h4>Eletrônicos</h4>
						</div>
					</section>

					<section className="second-section-search-box">
						{this.state.titleProduct.map((product, idx) =>
							<>
								<Link to={`/items/${product.id}`}>
									<div className="card" key={idx}>
										<img className='images' src={product.thumbnail} alt={product.title} />
										<h2>R$ {product.price},00</h2>
										<h4>{product.address.city_name.toUpperCase()}</h4>
										<h4><Link to={`/items/${product.id}`}>{product.title}</Link>{product.id}</h4>
									</div>
								</Link>
							</>
						).slice(0, 4)
						}
					</section>
				</div>
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
