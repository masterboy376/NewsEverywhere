import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(props.page);
    const [pageSize, setPageSize] = useState(props.pageSize);
    const [totalResults, setTotalResults] = useState();

    const updateNews = async () => {
        props.setProgress(20);
        const url = `https://newsapi.org/v2/top-headlines?q=world&apiKey=${props.apiKey}&page=${page}&pageSize=${pageSize}&category=${props.category}`;

        setLoading(true);

        let data = await fetch(url);

        props.setProgress(45);

        let parsedData = await data.json();

        props.setProgress(70);
        console.log(parsedData);

        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);

        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
    },[]);//run only once

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?q=world&apiKey=${props.apiKey}&page=${page+1}&pageSize=${pageSize}&category=${props.category}`;
        setPage(page+1);
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles((articles.concat(parsedData.articles)));
        setTotalResults(parsedData.totalResults);
    };

        return (
            <>
                <h1 className="display-4  text-center mt-5 pt-4">Welcome to NewsEverywhere!</h1>
                <h1 className="display-6 my-2 text-center">{props.heading} top headlines from around the world.</h1>

                {/* {loading === true && <Spinner/>} */}

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={!(page + 1 > Math.ceil(totalResults / pageSize))}
                    loader={<h4><Spinner /></h4>}
                >

                    <div className="container-fluid mt-3 pt-2">
                        <div className="row flex justify-content-center my-5" style={{ height: '100%' }}>
                            {articles.map((element) => {
                                return <Newsitem author={element.author ? element.author : `unknown`} source={element.source.name ? element.source.name : `unknown`} date={element.publishedAt ? element.publishedAt : `N/A`} title={element.title ? element.title : ''} description={element.description ? element.description : ''} imageUrl={element.urlToImage != null ? element.urlToImage : 'https://previews.123rf.com/images/bluebay/bluebay1601/bluebay160100066/51005837-words-news-on-digital-blue-background.jpg'} newsUrl={element.url} key={element.url}/> 
                            })}
                        </div>
                    </div>

                </InfiniteScroll>
            </>
        )
}
News.defaultProps = {
    category: 'general',
    page: 1,
    pageSize: 20
}
News.propTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number,
    page: PropTypes.number
}

export default News;
