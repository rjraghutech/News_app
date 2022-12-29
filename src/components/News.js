import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  async componentDidMount(){
    let apiUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=f5ecbfbf67644284b3c96e4520b0d9a9';
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState(this.articles=parsedData.articles);
    
  }
  
  render() {
    console.log(this.articles);
    return (
      <div className='container my-3'>
        <div className="row my-3">
          {this.articles.map((element) => {
            return <div className='col-md-4 my-2' key={element.url}>
              <NewsItem title={element.title?element.title.slice(0,40):''} description={element.description?element.description.slice(0,90):''} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
          
        </div>
      </div>
    )
  }
}
