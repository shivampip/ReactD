import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component{
    state= {term: ""};

    print(msg){
        console.log(msg);
    }

    componentDidUpdate(){
        //this.print(this.state.term);
    }

    searchTerm= (eve)=>{
        eve.preventDefault();
        this.props.onSearch(this.state.term);
    }

    render(){
        return (
        <form className="search-bar" onSubmit= {this.searchTerm}>
            <input
            type="text"
            placeholder="Search Video" 
            value= {this.state.term}
            onChange= {(eve)=> {this.setState({term: eve.target.value})}}
            />
        </form>
        );
    }
}

export default SearchBar;