import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDefault from './components/video_default'

const API_KEY = 'AIzaSyBA_NXCC1CQNh5ZERViiyy8LD4Jc1jjV4Y';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        YTSearch({key: API_KEY, term: 'serf'}, videos => this.setState({
            videos:videos,
            selectedVideo: videos[0]
        }))
    }
    render(){
        return  (
            <div>
                <SearchBar />
                <VideoDefault video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('#root'));