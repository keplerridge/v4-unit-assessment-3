import React, {Component} from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Shelf from './components/Shelf';
import data from './data';
// import './index.css';
import './App.css';

class App extends Component {
  
  

  constructor(){
    super();
    this.state = {
      books: Object.assign([], data),
      shelf: ['Empty shelf']
    }
  }

  addToShelf = (title, index) => {
    if(this.state.shelf[0].includes('Empty shelf')){
      this.state.shelf.splice(0, 1)
    }

    let newBooks = this.state.books;
    
    newBooks.splice(index, 1);
    this.setState({shelf: [...this.state.shelf, title]});
  }
  
  clearShelf = () => {
    this.setState({books: Object.assign([], data), shelf: ['Empty shelf']})
    console.log(this.state.books)
  }

  filterBooks = (input) => {
    let userInput = input.toLowerCase();
    let filtered = this.state.books.filter(book => book['title'].toLowerCase().includes(userInput) || book['author'].toLowerCase().includes(userInput))
    this.setState({books: filtered})
  }

  reset = () => {
    let resetList = Object.assign([], data)
    resetList = resetList.filter(book => !this.state.shelf.includes(book['title']))
    this.setState({books: resetList})
    console.log(this.state.books)
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
