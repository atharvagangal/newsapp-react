import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date } = this.props;
    return (
      <div className="card">
        <img src={!imgUrl ? "https://newslivetv.com/wp-content/uploads/2020/06/breaking-news.jpg" : imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
