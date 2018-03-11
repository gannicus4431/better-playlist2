import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff'
};

let fakeServerData = {
  user: {
    name: 'Jimmy',
    playlists: [
      {
      name: 'My favourites',
      songs: [
        {name: 'Beat It', durations: 1234},
        {name: 'Beat Out', durations: 1274},
        {name: 'Time Out', durations: 1534},
        ]
      },
      {
        name: 'Discover Weekly',
        songs:[
          {name: 'Beat It', durations: 1234},
          {name: 'Beat Out', durations: 1274},
          {name: 'Time Out', durations: 1534},
        ]
      },
      {
        name: 'Another playlist',
        songs: [
          {name: 'Beat It', durations: 1234},
          {name: 'Beat Out', durations: 1274},
          {name: 'Time Out', durations: 1534},
        ]
      },
      {
        name: 'Playist - yeah!',
        songs: [
          {name: 'Beat It', durations: 1234},
          {name: 'Beat Out', durations: 1274},
          {name: 'Time Out', durations: 1534},
        ]
      }
    ]
  }
};

class PlaylistCounter extends Component {
  render() {
    return(
      <div style = {{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2>{this.props.playlists.length} playlists </h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.durations
    } , 0)
    return(
      <div style = {{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} hours </h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return(
      <div style = {defaultStyle}>
        <img/>
        <input type="text"/>

      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return(
    <div style = {{...defaultStyle, display: 'inline-block', width: "25%"}}>
      <img/>
      <h3>Playlist Name</h3>
      <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
    </div>
  );
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000);
    }

  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
          <h1 style = {{...defaultStyle,'font-size':'54px'}}>
          {this.state.serverData.user.name} Playlists
        </h1>
            <PlaylistCounter playlists = {this.state.serverData.user.playlists}/>
            <HoursCounter playlists = {this.state.serverData.user.playlists}/>
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          </div> : <h1 style = {defaultStyle}>Loading..</h1>
        }
      </div>
    );
  }
}

export default App;
