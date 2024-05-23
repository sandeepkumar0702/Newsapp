import React from 'react'
const Newsitem=(props)=>{
    let {title,description,imageurl,newsurl}=props;
    return (
      <div className="my-3">
        <div className="card " style={{width: "18rem"}}>
            <img src={!imageurl? "https://deadline.com/wp-content/uploads/2023/08/WGA-AMPTP- No-Deal-new-talks.jpg?w=1024":imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a rel="noreferrer" href={newsurl}  target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
}
export default Newsitem
