import './App.css';
import SearchBox from '../search-box/SearchBox';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../home/Home';
import SearchResult from '../search-result/SearchResult';
import ProductDetail from '../product-detail/ProductDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBox />
        </header>

        <section>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/items' component={SearchResult} />
            <Route exact path="/items/:id" component={ProductDetail} />
          </Switch>
        </section>
      </div>
    )
  }
}

export default App;
