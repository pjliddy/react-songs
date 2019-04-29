// action creator returns action object with type and payload (optional)
export const selectSong = (song) => {
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
}
