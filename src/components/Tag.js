import React from 'react'

import '../css/Tag.css'

export default function Tag({item}) {
  return (
    <div className='tag_container'>
      <p className='tag_text'>{item}</p>
    </div>
  )
}
