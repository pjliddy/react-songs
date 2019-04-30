import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    // this.props === { songs: state.songs }
    console.log(this.props);

    return (
      <div>SongList</div>
    );
  }
}

// mapStateToProps is included in every redux component, along with connect
const mapStateToProps = (state) => {
  return { songs: state.songs };
}

// connect is a React component that gets a list of songs from the Provider
export default connect(mapStateToProps) (SongList);
