import React, { Component } from 'react'
import News from '../news/News'
import '../newscnt/Newscnt.css'
import '../news/News.css'
import Alerts from '../alert/Alerts'
import Sppiner from '../sppiner/Sppiner'
import PropTypes from 'prop-types'

const apikeyinevn=null;
export class Newscnt extends Component {
  static defaultProps={
    category: 'general'
  }
  static propTypes={
    country: PropTypes.string
  }
  constructor(){
    super();
    this.state={
      articals: [],
      page: 1,
      pagecount: 21,
      loading: false
    }
  }
  async fetchingnews(){
    let api=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${apikeyinevn}&page=1&pageSize=21`;
    this.setState({loading: true})
    let data= await fetch(api);
    let parse=await data.json();
    console.log(parse);
    this.setState({
      articals: parse.articles, 
      pagecount: parse.totalResults,
      loading: false
    })
  }
  async componentDidMount(){
    if(apikeyinevn!=null){
      this.fetchingnews()
    }
    else{
      const sample =require("./temp_news.json")
      console.log(sample)
      this.setState({
        articals: sample.articles,
        pagecount: sample.totalResults,
        loading: false
      })
    }
  }
  prevpagefun= async()=>{
    this.setState({page: this.state.page-1})
    this.fetchingnews()
  }
  nextpagefun=async()=>{
    this.setState({page: this.state.page+1})
    this.fetchingnews()
  }
  apinotfount(){
    if(apikeyinevn!=null){
      return false
    }
    else{
      return true
    }
  }
  render() {
    return (
      <>
        <h1 className={`heading-${this.props.mode}`}> top {this.props.category} headlines from us</h1>
        {this.state.loading && <Sppiner/>}
        {this.apinotfount() && <Alerts info="info"/>}
        <div className="news-container">
          {!(this.state.loading) && this.state.articals.map((element)=>{
          {return (element.url==="https://removed.com")?null:<div key={element.url}>
                    <div >
                      <News title={(!element.title)?"":element.title} 
                      discription={(!element.description||element.description==="[Removed]")?"":element.description} 
                      imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} 
                      source={element.source.name} mode={this.props.mode}/>
                    </div>
                </div>}
          })}
        </div>
        <div className="page"> 
          <button disabled={this.state.page<2} onClick={this.prevpagefun} target="_blank" className={`read-more read-more-${this.props.mode} prev-page`}>&larr;prev</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.pagecount/21)} onClick={this.nextpagefun} target="_blank" className={`read-more read-more-${this.props.mode} next-page`}>next&rarr;</button>
        </div>
      </>
    )
  }
}
export default Newscnt
