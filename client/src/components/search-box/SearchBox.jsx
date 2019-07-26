import React, { Component } from "react";
import { Link } from 'react-router-dom';

import './SearchBox.css';

class SearchBox extends Component {

	render() {
		const searchBar = {
			logo: <img src="../images/logo.png" alt="Imagem do logotipo do mercado livre." />,
			input: <input type="search" name="search" placeholder="Buscar produtos, marcas e muito mais..." />
		}

		return (
			<>
				<div className='search-box'>
					<Link to='/'>
						<figure>{searchBar.logo}</figure>
					</Link>
					<div className='search-input-container'>
						<Link to='/item?search='>
							<form action="" className='input-field'>
								{searchBar.input}
								<i class="fas fa-search"></i>
							</form>
						</Link>
					</div>
				</div>
			</>
		)
	}
}

export default SearchBox;
