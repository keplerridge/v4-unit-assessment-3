import React, {Component} from 'react';

class BookList extends Component { 
    
    constructor () {
        super();
        this.state = {
            
        }
    }
    
    
    render () {

        return (
            <section>
                <h2>List</h2>
                <section id='bookList'>
                    {this.props.books.map(book => 
                        <div key ={book.id}>
                            <img onClick={this.props.addToShelfFn} src={book.img} alt='Book Cover'></img>
                            <div>{book.author}</div>
                            <div>{book.title}</div>
                        </div>
                        )}
                </section>

            </section>
        )
    }
}

export default BookList;