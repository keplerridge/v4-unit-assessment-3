import React, {Component} from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Shelf from './components/Shelf'
import data from './data'
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      books: data,
      shelf: []
    }
  }

  addToShelf () {

  }
  
  clearShelf () {

  }

  filterBooks () {

  }

  reset () {

  }

  render(){
    return (
      <div className='main'>
        <section className='topheader'>
          <header>
            <Header />
          </header>
        </section>
        <section>
          <SearchBar 
          filterBooksFn={this.filterBooks}
          resetFn={this.reset}/>
        </section>
        <section>
          <BookList 
          books={this.state.books}
          addToShelfFn={this.addToShelf}/>
        </section>
        <section>
          <Shelf 
          shelf={this.state.shelf}
          clearShelfFn={this.clearShelf}/>
        </section>
      </div>
    )
  }
}

export default App;
