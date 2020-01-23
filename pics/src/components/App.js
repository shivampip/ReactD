import './App.css';
import React from 'react'
// import axios from 'axios';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';

class App extends React.Component{
    state= { images: []};

    // onTermSubmit(term){
    //     console.log("Search: "+term);
    //     axios.get("https://api.unsplash.com/search/photos",{
    //         headers: {
    //             Authorization: 'Client-ID a7201dc2e0f593d5afec59f5df5b8b5bd61c860877042f34d21078fade0469c8'
    //         },
    //         params:{
    //             query: term
    //         }
    //     }).then((response)=>{
    //         console.log(response.data.results);
    //     });
    // }

    onTermSubmit= async (term)=> {
        console.log("Search: "+term);
        const response= await unsplash.get("/search/photos",{
            params:{query: term} 
        })
        console.log(response.data.results);
        this.setState({images: response.data.results});
    }

    render(){
        return <div>
            <SearchBar onTermSubmit= {this.onTermSubmit}/>
            Found: {this.state.images.length} images.
            </div>
    }
}

export default App;