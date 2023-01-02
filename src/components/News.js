import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
  articles = [];
  static defaultProps = { 
    category: 'general'
  }

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    }
  }
  async componentDidMount(){
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f5ecbfbf67644284b3c96e4520b0d9a9&page=1&pagesize=15`;
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState(this.articles=parsedData.articles);
  }
  handelPrev = async () =>{
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f5ecbfbf67644284b3c96e4520b0d9a9&page=${this.state.page - 1}&pagesize=15`;
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState(this.articles=parsedData.articles);
  }
  handleNext = async () =>{
    console.log('next')
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f5ecbfbf67644284b3c96e4520b0d9a9&page=${this.state.page + 1}&pagesize=15`;
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState(this.articles=parsedData.articles);
  }
  
  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center">NEWS App-Top Headlines</h1>
        <div className="row my-3">
          {this.articles.map((element) => {
            return <div className='col-md-4 my-2' key={element.url}>
              <NewsItem title={element.title?element.title.slice(0,40):''} description={element.description?element.description.slice(0,90):''} imgUrl={element.urlToImage?element.urlToImage:'https://images.hindustantimes.com/tech/img/2022/12/30/1600x900/onur-binay--WJQYRbgRLk-unsplash_1672394312148_1672394327564_1672394327564.jpg'} newsUrl={element.url}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button className="btn btn-primary btn-sm" onClick={this.handelPrev}>&larr; Previous</button>
          <Spinner />
          <button className="btn btn-primary btn-sm" onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
