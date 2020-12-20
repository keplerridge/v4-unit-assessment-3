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
      shelf: ['No books on your shelf!']
    }
  }

  addToShelf = (title, index) => {
    let newBooks = this.state.books;
    newBooks.splice(index, 1)
    this.setState({shelf: [...this.state.shelf, title]})
  }
  
  clearShelf = () => {
    this.setState({shelf: []})
    this.setState({books: data})
  }

  filterBooks = (input) => {
    let filteredBooks = [];

    for(let i = 0; i < this.state.books.length; i++){
      if(this.state.books[i]['title'].includes(input)){
        filteredBooks.push(this.state.books[i])
        this.state.books.splice(i, 1)
      } else if (this.state.books[i]['author'].includes(input)){
        filteredBooks.push(this.state.books[i])
        this.state.books.splice(i, 1)
      }
    }
  }

  reset = () => {
    this.setState({books: data, shelf: ['No books on your shelf!']})
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
