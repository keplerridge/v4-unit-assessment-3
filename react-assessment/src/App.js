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

  addToShelf = (title) => {
    
  }
  
  clearShelf = () => {

  }

  filterBooks = () => {

  }

  reset = () => {

  }

  render(){
    console.log(this.state.shelf)
    return (
      <div className='main'>
        <section className='topheader'>
          <header>
            <Header />
          </header>
        </section>
        <section className='searchbar'>
          <SearchBar 
          filterBooksFn={this.filterBooks}
          resetFn={this.reset}/>
        </section>
        <section className='booklist'>
          <BookList 
          books={this.state.books}
          addToShelfFn={this.addToShelf}/>
        </section>
        <section className='shelf'>
          <Shelf 
          shelf={this.state.shelf}
          clearShelfFn={this.clearShelf}/>
        </section>
      </div>
    )
  }
}

export default App;
