import React, {Component} from 'react';

class Shelf extends Component {
    render () {
    const mappedTitles = this.props.shelf.map((title, i) => {
        return <p className='shelfList' key={i}>{title}</p>;
    })
        return (
            <div className='shelf'>
                <h2 id='shelfTitle'>Your Shelf</h2>
                <button className='clearShelf' onClick={this.props.clearShelfFn}>Clear Shelf</button>
                <h2>{mappedTitles}</h2>
            </div>
        )
    }
}

export default Shelf;