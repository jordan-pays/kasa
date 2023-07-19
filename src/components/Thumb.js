import React from 'react'

import "../css/Thumb.css"

export default function Thumb({item}) {
  return (
    <a className='thumb_container' href={`fiche-logement/${item.id}`}>
        <img className='thumb_img' src={item.cover}/>
      <p className='thumb_title'>{item.title}</p>
    </a>  
  )
}
