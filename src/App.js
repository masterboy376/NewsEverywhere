import React, { Fragment, useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = ()=> {
    let page = 1;
    let pageSize = 20;
    let totalResults = 34;
    const apiKey = process.env.REACT_APP_NEWS_API;
    const [progress, setProgress] = useState(0);
        return (
            <>
                <Router>
                    <Fragment>
                        <Navbar />
                        <LoadingBar color='#5bc0de' progress={progress} />
                        <Routes>
                            <Route exact path='/' element={<News apiKey={apiKey}key='general' heading='General' page={page} pageSize={pageSize} totalResults={totalResults} category='general' setProgress={setProgress}/>} />
                            <Route exact path='/business' element={<News apiKey={apiKey}key='business' heading='Business' page={page} pageSize={pageSize} totalResults={totalResults} category='business' setProgress={setProgress}/>} />
                            <Route exact path='/entertainment' element={<News apiKey={apiKey}key='entertainment' heading='Entertainment' page={page} pageSize={pageSize} totalResults={totalResults} category='entertainment' setProgress={setProgress}/>} />
                            <Route exact path='/health' element={<News apiKey={apiKey}key='health' heading='Health' page={page} pageSize={pageSize} totalResults={totalResults} category='health' setProgress={setProgress}/>} />
                            <Route exact path='/science' element={<News apiKey={apiKey}key='science' heading='Science' page={page} pageSize={pageSize} totalResults={totalResults} category='science' setProgress={setProgress}/>} />
                            <Route exact path='/sports' element={<News apiKey={apiKey}key='sports' heading='Sports' page={page} pageSize={pageSize} totalResults={totalResults} category='sports' setProgress={setProgress}/>} />
                            <Route exact path='/technology' element={<News apiKey={apiKey}key='technology' heading='Technology' page={page} pageSize={pageSize} totalResults={totalResults} category='technology' setProgress={setProgress}/>} />
                        </Routes>
                    </Fragment>
                </Router>
            </>
        )
}

export default App;
