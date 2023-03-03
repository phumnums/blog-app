import React from 'react'
import { Link } from 'react-router-dom'
import "./post.css"

export default function Post() {
  return (
    <div className='post'>
      <img 
      className='postImg'
        src="https://i.pinimg.com/564x/26/09/88/260988ae6944ae3215c36a09395190c5.jpg" 
        alt="" 
    />
    <div className='postInfo'>
        <span className='postTitle'>
          <Link className='link' to="/post/:postId">I wanted to be born in a plastic bag.</Link>
        </span>
          
        <hr/>
    </div>
    <p className='postDesc'>
        At the age of 19, I wanted to be born in a plastic bag. 
        because plastic bags can float

        At the age of 19, I wanted to be born in a plastic bag. 
        because plastic bags can float
        At the age of 19, I wanted to be born in a plastic bag. 
        because plastic bags can float
        
    </p>
    </div>
  )
}
