import React, { Component, Fragment } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
    page = 1;
    pageSize = 20;
    totalResults = 34;
    // apiKey = "4818d9ee6a0640efa8efb6fc93a93e63";
    apiKey = process.env.REACT_APP_NEWS_API;
    state={
        progress: 0,
    }
    setProgress=(progress)=>{
        this.setState({progress: progress});
    }
    render() {
        return (
            <>
                <Router>
                    <Fragment>
                        <Navbar />
                        <LoadingBar
                            color='	#5bc0de'
                            progress={this.state.progress}
                        />
                        <Routes>
                            <Route exact path='/' element={<News apiKey={this.apiKey}key='general' heading='General' page={this.page} pageSize={this.pageSize} totalResults={this.totalResults} category='general' setProgress={this.setProgress}/>} />
                            <Route exact path='/business' element={<News apiKey={this.apiKey}key='business' heading='Business' page={this.page} pageSize={this.pageSize} totalResults={this.totalResults} category='business' setProgress={this.setProgress}/>} />
                            <Route exact path='/entertainment' element={<News apiKey={this.apiKey}key='entertainment' heading='Entertainment' page={this.page} pageSize={this.pageSize} totalResults={this.totalResults} category='entertainment' setProgress={this.setProgress}/>} />
                            <Route exact path='/health' element={<News apiKey={this.apiKey}key='health' heading='Health' page={this.page} pageSize={this.pageSize} totalResults={this.totalResults} category='health' setProgress={this.setProgress}/>} />
                            <Route exact path='/science' element={<News apiKey={this.apiKey}key='science' heading='Science' page={this.page} pageSize={this.pageSize} totalResults={this.totalResults} category='science' setProgress={this.setProgress}/>} />
                            <Route exact path='/sports' element={<News apiKey={this.apiKey}key='sports' heading='Sports' page={this.page} pageSize={this.pageSize} totalResults={this.totalResults} category='sports' setProgress={this.setProgress}/>} />
                            <Route exact path='/technology' element={<News apiKey={this.apiKey}key='technology' heading='Technology' page={this.page} pageSize={this.pageSize} totalResults={this.totalResults} category='technology' setProgress={this.setProgress}/>} />
                        </Routes>
                    </Fragment>
                </Router>
            </>
        )
    }
}
