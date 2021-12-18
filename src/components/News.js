import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    static defaultProps = {
        category: 'general',
        page: 1,
        pageSize: 20
    }

    static propTypes = {
        category: PropTypes.string,
        pageSize: PropTypes.number,
        page: PropTypes.number
    }
    constructor(props) {// runs first
        super(props);
        document.title = `NewsEverywhere - ${this.props.heading}`;
        this.state = {
            articles: [],
            loading: true,
            page: this.props.page,
            pageSize: this.props.pageSize,
            totalResults: this.props.totalResults
        }
    }
    async updateNews(){
        this.props.setProgress(20);
        const url = `https://newsapi.org/v2/top-headlines?q=world&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}&category=${this.props.category}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(45);
        let parsedData = await data.json()
        this.props.setProgress(70);
        console.log(parsedData);
        this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
        });
        this.props.setProgress(100);
        }
    async componentDidMount() {//runs third
        this.updateNews();
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?q=world&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}&category=${this.props.category}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            loading: false,
        })
};
// handlePreviousClick = async () => {
//     this.setState({ page: this.state.page - 1 });
//     this.updateNews();
// }
// handleNextClick = async () => {
//     console.log((this.state.page + 1) > (Math.ceil(this.state.totalResults / this.state.pageSize)));
//     if (!((this.state.page + 1) > Math.ceil(this.state.totalResults / this.state.pageSize))) {
//         this.setState({ page: this.state.page + 1 });
//         this.updateNews();

//     }
//     else {

//     }
// }
render() {//runs second
    return (
        <>
            <h1 className="display-4  text-center mt-5 pt-4">Welcome to NewsEverywhere!</h1>
            <h1 className="display-6 my-2 text-center">{this.props.heading} top headlines from around the world.</h1>

{/* {this.state.loading === true && <Spinner/>} */}

            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={(this.state.articles.length !== this.state.totalResults)}
                loader={<h4><Spinner /></h4>}
            >

                <div className="container-fluid mt-3 pt-2">
                    <div className="row flex justify-content-center my-5" style={{ height: '100%' }}>
                        {this.state.articles.map((element) => {
                            return <Newsitem author={element.author ? element.author : `unknown`} source={element.source.name ? element.source.name : `unknown`} date={element.publishedAt ? element.publishedAt : `N/A`} title={element.title ? element.title : ''} description={element.description ? element.description : ''} imageUrl={element.urlToImage != null ? element.urlToImage : 'https://previews.123rf.com/images/bluebay/bluebay1601/bluebay160100066/51005837-words-news-on-digital-blue-background.jpg'} newsUrl={element.url} key={element.url} />
                        })}
                    </div>
                </div>

            </InfiniteScroll>

            {/* <div className='d-flex container justify-content-between my-5'>
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-outline-dark" onClick={this.handlePreviousClick}>&laquo; Previous</button>
                    <button type="button" disabled={(this.state.page + 1) > (Math.ceil(this.state.totalResults / this.state.pageSize))} className="btn btn-outline-dark" onClick={this.handleNextClick}>Next &raquo;</button>
                </div> */}
        </>
    )
}
}
