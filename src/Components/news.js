import React, { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import "./news.css";
function Application() {
  const [news, setNews] = useState([])
  const fetchNews = () => {
    axios.get("https://api.marketaux.com/v1/news/all?symbols=TSLA,AMZN,MSFT,TATAMOTORS&filter_entities=true&language=en&api_token=wK1u0ZjOeOKpColSAPvddRgpGbT2XbwQuRbTpBIt")
      .then((response) => {
        console.log(response);
        setNews(response.data.data)
      })
  }
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="void">
            <button className='btn btn-primary' onClick={fetchNews} style={news.css}>News Of The Day</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="crds">
          {
            news.map((value,index) => {
              return (
                <div key={index} className="col-4">
                  <div className="card" style={{ width: "0.005 rem" }}>
                    <img src={value.image_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      <a href={value.url} className="btn btn-primary" target={"_blank"}>Show More...</a>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  )
}
ReactDOM.render(<Application />,document.querySelector("#root"));

export default Application;