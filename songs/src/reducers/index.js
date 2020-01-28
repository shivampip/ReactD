import { combineReducers } from "redux";

const songsReducer= ()=>{
    return [
        { title: "Tujme rub dikhta hai", duration: "4:15"},
        { title: "Shape of You", duration: "3:10"},
        { title: "Khaike pan banarus wala", duration: "2:45"},
        { title: "Kya se kya ho gye dekhte dekhte", duration: "4: 10"}
    ];
};

const selectedSongReducer= (selectedSong= null, action)=>{
    if(action.type==="SELECTED_SONG"){
        return action.payload;
    }
    return selectedSong;
}


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

