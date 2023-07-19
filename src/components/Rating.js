import React, { useState } from 'react'

import '../css/Rating.css'

export default function Rating({nbStars}) {
  return (
    <div className='stars_container'>
			<div className={`stars_item ${nbStars>=1 ? "stars_item_actif" : ""}`}> 
				<i className="fa-solid fa-star"></i>
			</div>

			<div className={`stars_item ${nbStars>=2 ? "stars_item_actif" : ""}`}> 
				<i className="fa-solid fa-star"></i>
			</div>

			<div className={`stars_item ${nbStars>=3 ? "stars_item_actif" : ""}`}> 
				<i className="fa-solid fa-star"></i>
			</div>

			<div className={`stars_item ${nbStars>=4 ? "stars_item_actif" : ""}`}> 
				<i className="fa-solid fa-star"></i>
			</div>

			<div className={`stars_item ${nbStars >=5 ? "stars_item_actif" : ""}`}> 
				<i className="fa-solid fa-star"></i>
			</div>
		</div>
  )
}
