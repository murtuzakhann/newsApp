import React, { useState, useEffect } from "react";
import Loader from "./Loader";

const Slider = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${props.apiKey}&page=1&pageSize=2`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
  
      setLoading(false);
    };
    updateNews();
    
  },[]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        articles.map((elements) => {
          return (
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
              key={elements.url}
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner width" style={{ width: "100%" }}>
                <div
                  className="carousel-item active"
                  style={{ marginTop: "2px" }}
                >
                  <img
                    className="d-block w-100"
                    src={elements.urlToImage}
                    alt="First slide"
                  />
                  <div className="carousel-caption d-block">
                    <h5>{elements.title.slice(0, 35)}...</h5>
                    <p>
                      {elements.description.slice(0, 35)}...
                      <br />{" "}
                      <button className="btn btn-dark">
                        <a
                          href={elements.url}
                          target="_blank"
                          rel="noreferrer"
                          style={{ textDecoration: "none" }}
                        >
                          Read More
                        </a>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Slider;
