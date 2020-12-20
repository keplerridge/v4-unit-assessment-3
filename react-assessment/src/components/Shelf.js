import React, {Component} from 'react';

class Shelf extends Component {
    render () {
    const mappedTitles = this.props.shelf.map(title => {
        return title;
    })
        return (
            <div className='shelf'>
                <h2>shelf</h2>
                {mappedTitles}
            </div>
        )
    }
}

export default Shelf;