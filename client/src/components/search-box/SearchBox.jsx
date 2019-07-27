import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './SearchBox.css';
import axios from 'axios';

class SearchBox extends Component {
	constructor() {
		super();
		this.state = {
			product: '',
			titleProduct: [],
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
				})
				.catch((error) => {
					throw new Error(error);
				});
		}

		const searchBar = {
			logo: <img src="../images/logo.png" title="Home Page" alt="Imagem do logotipo do mercado livre." />,
			input: <input type="search" name="product" value={this.state.product} placeholder="Buscar produtos, marcas e muito mais..." onChange={e => this.handleChange(e)} />,
			url: 'http://localhost:3000/items',
			urlObject: window.location.href,
		}

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

				<section>
					{
						(this.state.product.length !== 0 &&  searchBar.urlObject === searchBar.url)
							? this.state.titleProduct.map((product, idx) =>
								<h4 key={idx}><Link to={`/items/${product.id}`}>{product.title}</Link>{product.id}</h4>).slice(0, 4)
							: ''
					}

				</section>
			</>
		)
	}
}

export default SearchBox;
