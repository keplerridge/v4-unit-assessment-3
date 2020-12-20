import React, {Component} from 'react';

class BookList extends Component { 
    
    constructor () {
        super();
        this.state = {
            
        }
    }
    
    
    render () {
    const mappedBooks = this.props.books.map((book, i) => (
        <div key={i}>
            <img onClick={() => this.props.addToShelfFn(book.title)} src={book.img} alt='Book Cover'></img>
            <div>{book.author}</div>
            <div>{book.title}</div>
        </div>
    ))
        return (
            <section>
                <h2>List</h2>
                <section>
                    {mappedBooks}
                </section>

            </section>
        )
    }
}

export default BookList;

