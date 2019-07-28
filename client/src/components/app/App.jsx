import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import ProductDetail from '../product-detail/ProductDetail';
import SearchResult from '../search-result/SearchResult';
import SearchBox from '../search-box/SearchBox';
import Home from '../home/Home';
import './App.css';

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
