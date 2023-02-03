import Loader from "./Loader";
import NewsContainer from "./NewsContainer";
import PropTypes from 'prop-types';
import Categories from "./Categories";
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useState, useEffect } from "react";


const Newsbox =(props) => {
   const capitalized = (string) =>
    {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }

    document.title= `NewsFlasher - ${capitalized(props.category)}`

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
  
    useEffect(() => {
      updateNews();
      }
      ,[]);

    const updateNews = async () => {
      props.setProgress(40)
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true)
      let data = await fetch(url);
      props.setProgress(75)
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      props.setProgress(100);  
      setLoading(false);
    }

  const fetchMoreData = async () =>
  {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    setPage(page + 1);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    
    
  }
  

    return (
      <>
        <div className="container">
          <h1 style={{ textAlign: "center" }}>News Flasher's Top News from {capitalized(props.category)}</h1>
          <Categories/>
         
          
          {loading && <Loader/>}

          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loader/>}
          style={{ overflow: "none"}} 
        >

<div className="row" style={{width:"100%"}}>
          {articles.map((elements) => {
              return (
                <div className="col-md-4" key={elements.url}>
                  <NewsContainer
                    
                    author={elements.author ? elements.author : "Anonymous"}
                    publishedAt={
                      elements.publishedAt ? elements.publishedAt : ""
                    }
                    title={elements.title ? elements.title.slice(0, 35) : ""}
                    description={
                      elements.description
                        ? elements.description.slice(0, 55)
                        : ""
                    }
                    imageUrl={
                      elements.urlToImage
                        ? elements.urlToImage
                        : "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
                    }
                    newsUrl={elements.url}
                  />
                </div>
              )})}
              </div>

</InfiniteScroll>
      
            {/* <div className="container d-flex justify-content-between">
              
               
             
            
                {page+1>Math.ceil(totalResults/pageSize)&&<div>No More Results</div>}
                
                
              
            </div> */}
          </div>
       
      </>
    );
  }




Newsbox.defaultProps=
  {
      country: 'us',
      category: 'general',
      pageSize: 20
  }

Newsbox.propTypes=
  {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
  }

  export default Newsbox