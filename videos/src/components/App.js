import './App.css';
import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

// AIzaSyCQneDt3z_zSKwBt_T8bfP01I97nP-oaYY

class App extends React.Component{
    state= { videos: []};

    print(msg){
        console.log(msg);
    }

    onSearch= async (term)=>{
        this.print("Searching "+term+".....");
        const response= await youtube.get("/search", {
            params: {
                q: term
            }
        });
        this.print(response.data.items);
        this.setState({videos: response.data.items});
    }
    render(){
        return <div>
            <SearchBar onSearch={this.onSearch}/>
            Total {this.state.videos.length} videos got.
        </div>
    }
}


export default App;