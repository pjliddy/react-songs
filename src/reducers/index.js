import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Sweet Jane', duration: '3:19' },
    { title: 'Sister Ray', duration: '17:27' },
    { title: 'I\'m Waiting for the Man', duration: '4:37' },
    { title: 'What Goes On', duration: '4:49'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSongs: selectedSongReducer
});
