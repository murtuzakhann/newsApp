import React, { useState, useEffect } from "react";

import Loader from "./Loader";

const LongNewsBox = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${props.apiKey}&page=1&pageSize=6`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
  
      setLoading(false);
    };
    updateNews();
    
  },[]);

 

  return (
    <div className="row">
      {loading ? (
        <Loader />
      ) : (
        articles.map((elements) => {
          return (
            <div className="col-md-6" key={elements.url}>
              <div className="card mb-3">
                <img
                  className="card-img-top"
                  alt={elements.urlToImage}
                  src={
                    elements.urlToImage
                      ? elements.urlToImage
                      : "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
                  }
                />
                <div className="card-body">
                  <a
                    href={elements.url}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link"
                  >
                    {" "}
                    <h5 className="card-title">
                      {elements.title.slice(0, 55)}
                    </h5>
                  </a>
                  <p className="card-text">
                    {elements.description
                      ? elements.description.slice(0, 85)
                      : "Description not available"}...
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      {" "}
                      by {elements.author
                        ? elements.author
                        : "Anonymous"} on{" "}
                      {new Date(elements.publishedAt).toGMTString}{" "}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default LongNewsBox;
