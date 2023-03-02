import React from 'react'
import "./write.css"

export default function Write() {
  return (
    <div className='write'>
        <img 
            className='writeImg'
            src="https://i.pinimg.com/564x/26/09/88/260988ae6944ae3215c36a09395190c5.jpg" 
            alt="" 
        />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-circle-plus"></i>
                </label>
                <input 
                    type="file" 
                    id="fileInput" 
                    style={{display:"none"}} 
                />
                <input 
                    type="text" 
                    placeholder='Add Title' 
                    className='writeInput' 
                    autoFocus={true} 
                />
            </div>
            <div className='writeFormGroup'>
                <textarea 
                    placeholder='Add Description' 
                    type='text' 
                    className='writeInput writeText'>
                </textarea>
            </div>
            <button className='writeSubmit'>Post</button>
        </form>
    </div>
  )
}
