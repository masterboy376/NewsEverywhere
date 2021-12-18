import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        let { author, source, date, title, description, imageUrl, newsUrl } = this.props;
        return (
            <>
                <div className="card shadow g-col-4 d-flex my-3 mx-3 text-center" style={{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill text-dark fs-6 bg-info" style={{zIndex:'1'}}>
                            {source}
                        </span>
                        <h5 className="card-title">
                            {title}
                        </h5>
                        <hr />
                        <p className="card-text">{description}</p>
                        <p className="card-text fw-light">{`By ${author} form ${source} on ${new Date(date).toGMTString()}`}</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="align-self-end link-info">View detailes</a>
                    </div>
                </div>
            </>
        )
    }
}
