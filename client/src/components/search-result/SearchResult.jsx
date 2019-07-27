import React, { Component } from 'react';
import axios from 'axios';
import SearchBox from '../search-box/SearchBox';


class SearchResult extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
    this.callApiMeLi = this.callApiMeLi.bind(this);
  }

  callApiMeLi() {
    axios.get(`http://localhost:5000/api/items`)
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((error) => {
        throw new Error(error)
      });
  }

  componentDidMount() {
    this.callApiMeLi();
  }

  render() {
    return (
      <>
        {/* <h1 className="teste">ola mundo</h1> */}
        pia
      </>
    )
  }
}

export default SearchResult;