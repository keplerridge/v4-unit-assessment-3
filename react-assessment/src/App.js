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
    this.setState({shelf: [...this.state.shelf, title]})
  }
  
  clearShelf = () => {
    this.setState({shelf: []})
  }

  filterBooks = (input) => {
    let filteredBooks = [];

    for(let i = 0; i < this.state.books.length; i++){
      if(this.state.books[i]['title'].includes(input)){
        filteredBooks.push(this.state.books[i])
      } else if (this.state.books[i]['author'].includes(input)){
        filteredBooks.push(this.state.books[i])
      }
    }
  }

  reset = (str) => {
    
  }

  render(){
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
