import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component{
    // constructor(){
    //     this.onFormSubmit= this.onFormSubmit.bind(this);  //with normal function
    // OR  [in form] onSubmit= {(eve)=> this.onFormSubmit(eve)}
    // }
    
    state= {
        term: ""
    };

    onFormSubmit= (eve)=>{
        eve.preventDefault();
        this.props.onTermSubmit(this.state.term);
    }

    componentDidUpdate(){
        //console.log(this.state.term);
    }

    render(){
        return (
        <div className="card">
            <form onSubmit={this.onFormSubmit}>            
                <label className="inputLabel">Image Search</label><br/>
                <input className="textIn" type="text" placeholder="Start typing.." value={this.state.term} onChange={eve=>this.setState({term: eve.target.value})}/>
        </form>
        </div>
        );
    }
}

export default SearchBar;