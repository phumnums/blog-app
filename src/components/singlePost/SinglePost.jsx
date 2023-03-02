import React from 'react'
import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper"></div>
        <img 
            className="singlePostImg"
            src="https://i.pinimg.com/564x/26/09/88/260988ae6944ae3215c36a09395190c5.jpg" 
            alt=""  
        />
        <h1 className="singlePostTitle">
            I wanted to be born in a plastic bag.
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-regular fa-trash-can"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>
                Author: <b>CatBuaiCat</b> 
            </span>
        </div>
        <p className='singlePostDesc'>
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
