import React, {Component} from 'react';

class Shelf extends Component {
    render () {
        // console.log(this.props)
    const mappedTitles = this.props.shelf.map((title, i) => {
        return <h2 key={i}>{title}</h2>;
    })
        return (
            <div className='shelf'>
                <h2>shelf</h2>
                <h2>Your shelf is empty</h2>
                <button onClick={this.props.clearShelfFn}>Clear Shelf</button>
                {mappedTitles}
            </div>
        )
    }
}

export default Shelf;