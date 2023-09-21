import React from 'react';

const Moviecard = (props) => {
     const{resmovies} = props;
     const{img,title,rating,price,description} = resmovies;
    return (
         <div className='movie-card'>
            <img src={img} className='movie-img'/>
            <h3>{title}</h3>
            <h3>{rating}</h3>
            <h3>{price}</h3>
            <h3>{description}</h3>
        </div>
    )
}

export default Moviecard;