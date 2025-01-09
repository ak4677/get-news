import React, { Component } from 'react'
import './News.css'
export class News extends Component {
  render() {
    let {title,discription,imageUrl,newsUrl,mode,date,author,source}=this.props;
    // const img="C:/Users/aman kushwah/Documents/.vscode/web_dev/react-js/my-app_classbased/src/componets/not available.png"
    return (
      <div className='news-card'>
        <div>
          <img src={imageUrl?imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPy-3qVStSrriSr6ji3dkyl_KsLMEMtRwdjg&s"} alt="context" className="img"></img>
          <h5>{source}</h5>
        </div>
        <div className="detail">
          <h4>{title}</h4>
          <p>{discription}</p>
          <span>by: {author?author:"unknown"} on {new Date(date).toGMTString()}</span>
          <a rel="noreferrer" href={newsUrl} target="_blank" className={`read-more read-more-${mode}`}>read more</a>
        </div>
        
      </div>
    )
  }
}

export default News