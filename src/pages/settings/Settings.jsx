import React from 'react'
import "./settings.css"

export default function setting() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className='settingsTitle'>
          <span className="settingsUpdateTittle">Update your Account</span>
          <span className="settingsDeleteTittle">Delete Account</span>
        </div>
        <form className='settingsForm'>
          <label>Proflie Picture</label>
          <div className="settingsPP">
            <img 
              src="https://pbs.twimg.com/media/FqCabA2agAA9URU?format=jpg&name=900x900" 
              alt="" 
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-user"></i>
            </label>
            <input 
              type="file" 
              id="fileInput" 
              style={{display: "none"}}
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder='CatBuaiCat'/>
          <label>Email</label>
          <input type="email" placeholder='cat@gmail.com'/>
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
    </div>
  )
}
