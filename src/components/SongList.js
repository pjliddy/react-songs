import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  // this.props === { songs: state.songs }

  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    );
  }
}

// mapStateToProps is included in every redux component, along with connect
const mapStateToProps = (state) => {
  return { songs: state.songs };
}

// connect is a React component that gets a list of songs from the Provider
export default connect(mapStateToProps, { selectSong }) (SongList);
