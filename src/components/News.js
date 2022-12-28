import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articales = [
    {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Spain announces €10bn help to fight rising prices",
      "description": "PM Pedro Sánchez backs aid for households amid an energy crisis prompted by Russia's war in Ukraine.",
      "url": "http://www.bbc.co.uk/news/world-europe-64103683",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BC19/production/_128135184_1c6b576bf93b1266da9b6d22b94bedf709724e040_0_5472_36481000x667.jpg",
      "publishedAt": "2022-12-28T01:37:27.3680527Z",
      "content": "Spanish Prime Minister Pedro Sánchez has announced another 10bn (£8.8bn) in support to address rising prices following Russia's invasion of Ukraine.\r\nThe government would \"protect the middle class an… [+2275 chars]"
    },
    {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Russian sausage tycoon Pavel Antov dies in Indian hotel fall",
      "description": "Meat millionaire Pavel Antov, who recently denied criticising the war in Ukraine, had just turned 65.",
      "url": "http://www.bbc.co.uk/news/world-europe-64101437",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C5BF/production/_128132605_67c2028f-de1c-4d56-86d9-fdfc00dd31b5.jpg",
      "publishedAt": "2022-12-28T01:37:25.5403807Z",
      "content": "Russian sausage tycoon Pavel Antov has been found dead at an Indian hotel, two days after a friend died during the same trip.\r\nThey were visiting the eastern state of Odisha and the millionaire, who … [+2484 chars]"
    },
    {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Blind BBC News correspondent Sean Dilley defeats mugger who stole his phone",
      "description": "Sean Dilley says he acted 'instinctively' after being targeted in central London early on Tuesday.",
      "url": "http://www.bbc.co.uk/news/uk-64100975",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1232F/production/_128134547_sean4.jpg",
      "publishedAt": "2022-12-28T01:37:23.6933119Z",
      "content": "A blind BBC reporter says he \"instinctively\" leapt on a mugger who had stolen his mobile phone - and managed to get it back.\r\nSean Dilley was targeted on Tuesday while on a break during a night shift… [+2136 chars]"
    },
    {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Taiwan extends mandatory military service to one year",
      "description": "The decision comes as tensions between the self-ruled island and China grow.",
      "url": "http://www.bbc.co.uk/news/world-asia-64100577",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4EFF/production/_128132202_gettyimages-77225576.jpg",
      "publishedAt": "2022-12-28T01:37:20.3527557Z",
      "content": "Taiwan will extend mandatory military service from four months to one year, President Tsai Ing-wen has said.\r\nThe decision comes amid growing tensions with China, which claims the self-ruled island a… [+2533 chars]"
    },
    {
      "source": {
          "id": "bbc-news",
          "name": "BBC News"
      },
      "author": "BBC News",
      "title": "UN Security Council urges Taliban to reverse restrictions on women",
      "description": "The Taliban have recently banned women from attending university and working for NGOs.",
      "url": "http://www.bbc.co.uk/news/world-asia-64106226",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/FD05/production/_128137746_womenafp.jpg",
      "publishedAt": "2022-12-28T01:22:21.3528498Z",
      "content": "The UN Security Council has denounced Taliban government policies targeting women and girls in Afghanistan.\r\nThe Taliban have banned women from attending university and working for non-governmental o… [+2009 chars]"
    }
  ]
  constructor() {
    super();

  }
  render() {
    return (
      <div className='container my-3'>
        <div className="row my-3">
          {this.articales.map((element) => {
            return <div className='col-md-4 my-2'>
              <NewsItem title={element.title.slice(0,40)} description={element.description.slice(0,90)} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
          
        </div>
      </div>
    )
  }
}
