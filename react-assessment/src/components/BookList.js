import React, {Component} from 'react';

class BookList extends Component { 
    
    constructor () {
        super();
        this.state = {
            
        }
    }
    
    
    render () {
        // debugger;
    const mappedBooks = this.props.books.map((book, i) => (
        <div key={i}>
            <img onClick={() => this.props.addToShelfFn(book.title, i)} src={book.img} alt='Book Cover'></img>
            <div id='author'>{book.author}</div>
            <div id='title'>{book.title}</div>
        </div>
    ))
        return (
            <section className='mainBookList'>
                <h2 id='list'>List</h2>
                <section id='mainBookDisplay'>
                    {mappedBooks}
                </section>

            </section>
        )
    }
}

export default BookList;

