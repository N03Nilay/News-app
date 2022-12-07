import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { height } from '@mui/system';

const NewsLifeStyle = () => {
    const [news, setNews] = useState([]);
    const [loading,setLoading] = useState(false)

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=lifestyle&apiKey=a1848244ca214c6d8f10ae8ed136e063"
      );
      console.log(response.data.articles)
      setNews(response.data.articles);
      setLoading(true);
    };

    loadNews();
  }, []);
  return (
    <div>
        {loading ? (<div className="wrapper">
        
        {news.map((item, index) => {
          return (
            <div className="check">
          <div className="card">
          <img src={item.urlToImage} className="card-img-top" alt="loading" height={150} width={120} style={{padding:"2%"}}/>
           <div className="card-body">
           <h4 className="card-title">{item.title}</h4>
            <p className="card-text">{item.description}</p>
             </div>
             
  <a href={item.url} className="btn" id='btn-read' target="_blank">Read More</a>
</div>
</div>


                
               
          )
          })}
          </div>) : (<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>)
}         
    </div>
  )
}

export default NewsLifeStyle