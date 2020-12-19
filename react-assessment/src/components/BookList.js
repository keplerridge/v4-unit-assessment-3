import React, {Component} from 'react';

class BookList extends Component { 
    
    constructor () {
        super();
        this.state = {
            
        }
    }
    
    
    render () {
        const mappedBooks = this.props.books.map((books) => {
            return <h2><img src={books['img']} alt='Book Cover'></img><br></br> {books['title']} <br></br> {books['author']}</h2>;
        })
        return (
            <section>
                <h2>List</h2>
                <section>
                    {mappedBooks[0]}
                    {mappedBooks[1]}
                    {mappedBooks[2]}
                    {mappedBooks[3]}
                    {mappedBooks[4]}
                    {mappedBooks[5]}
                    {mappedBooks[6]}
                    {mappedBooks[7]}
                    {mappedBooks[8]}
                    {mappedBooks[9]}
                    {mappedBooks[10]}
                    {mappedBooks[11]}
                </section>

            </section>
        )
    }
}

export default BookList;