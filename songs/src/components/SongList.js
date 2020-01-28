import "./SongList.css";
import React from 'react';
import {connect} from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component{
    renderList= ()=>{
        return this.props.songs.map((song)=>{
            return (<div className="songItem" key={song.title}>
                <p>{song.title}</p>
                <button onClick={()=>{ this.props.selectSong(song);}}>Select</button>
            </div>);
        });
    }
    render(){   
        return <div>{this.renderList()}</div>;
    }
}


const mapStateToProps= (state)=>{
    console.log(state);
    return {
        songs: state.songs
    };
};


export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);