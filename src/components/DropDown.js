import React, { useState } from 'react'

import '../css/DropDown.css'

export default function DropDown({title,children}) {
  const [down, setDown] = useState(false)

  function changeDown () {
    setDown(res=> !res)
  }

  return (
    <div className='dropdown_container' onClick={changeDown} >
      <div className='dropdown_container_title'>
        <p className='dropdown_title'>{title}</p>
        {
          down ?
            <div className='chevron'>
              <i className="fa-solid fa-chevron-up"></i>
            </div>
          :
          <div className='chevron'>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        }
      </div>
      {
        down && 
        <div className='dropdown_container_body'>
          <p className='dropdown_body'>{children}</p>
        </div>
      }
    </div>
  )
}
