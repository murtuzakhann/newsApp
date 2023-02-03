import React from 'react'

const NewsContainer = (props) => {
  
    
   let {title, description, imageUrl, newsUrl, author, publishedAt,source} = props;
    return ( 
        
    <div className='container my-3'>
       
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}... </h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
            Read More
          </a>
         <p className='my-2'><span className="badge badge-pill badge-dark bg-dark">{source}</span></p>
          <p className="card-text"><small className="text-muted">Posted {new Date(publishedAt).toGMTString()} by {author} </small></p>
          
        </div>
      </div>
    </div>
    )

  }

export default NewsContainer;