import React, { Component } from 'react'
import _ from 'lodash'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/youtube/search_bar'
import VideoList from './components/youtube/video_list'
import VideoDefault from './components/youtube/video_default'
import './style/style.scss'

import BookList from './components/books/containers/book-list'
import BookDetail from './components/books/containers/book-detail'
import { Provider } from "react-redux";
import reducers from "./components/books/reducers/index";
import { createStore } from "redux";

const API_KEY = 'AIzaSyBA_NXCC1CQNh5ZERViiyy8LD4Jc1jjV4Y';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surf')
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        const videoSearch = _.debounce((term)=>{ this.videoSearch(term)},300);

        return  (
            <div>
                <BookList />
                <BookDetail />
                {/*<SearchBar onSearchTermChange={videoSearch}/>*/}
                {/*<VideoDefault video={this.state.selectedVideo}/>*/}
                {/*<VideoList*/}
                    {/*onVideoSelect={selectedVideo => this.setState({selectedVideo})}*/}
                    {/*videos={this.state.videos}/>*/}
            </div>
        );
    }
};

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root'));