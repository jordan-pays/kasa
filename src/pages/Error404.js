import React from 'react'
import "../css/Error.css"

export default function Error() {
  return (
    <div className='container'>
      <div className='container_error'>
      <div>
      <p className='huge_text'>404</p>
      <p className="text">Oups! La page que vous demandez n'existe pas.</p>
      </div>
      
      <a href='/' className="link">Retourner sur la page d’accueil</a>
      </div>
      
    </div>
  )
}
