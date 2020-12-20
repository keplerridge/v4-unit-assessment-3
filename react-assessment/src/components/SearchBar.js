import React, {Component} from 'react';

class SearchBar extends Component {
    
    constructor () {
        super();
        this.state = {
            userInput: ''
        }
    }

    handleChange = (e) => {
        this.setState({userInput: e.target.value})
    }

    handleClick = () => {
        this.props.filterBooksFn(this.state.userInput)
    }

    handleClear () {
        
    }

    render () {
        // console.log(this.state.userInput)
        return (
            <div>
                <input value={this.state.input} onChange={(e) => this.handleChange(e)} type='text'/>
                <button onClick={this.handleClick}>Search</button>
                <button onClick={this.handleClear}>Clear</button>
            </div>
        )
    }
}

export default SearchBar;