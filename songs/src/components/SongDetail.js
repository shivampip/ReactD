import "./SongDetail.css";
import React from 'react';
import {connect} from 'react-redux';

class SongDetail extends React.Component{

    showSongDetails= ()=>{
        if(this.props.song){
            return <div>
                <p>{this.props.song.title}</p>
                <p>{this.props.song.duration}</p>
            </div>
        }
        return <p>No Song Selected</p>
    }

    render(){
        return <div className="song-detail">
            {this.showSongDetails()}
        </div>;
    }
}

const mapStateToProps= (state)=>{
    //console.log(state);
    return {
        song: state.selectedSong
    }
};

export default connect(mapStateToProps)(SongDetail);