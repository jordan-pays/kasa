import React, { useState } from 'react'

import '../css/Carousel.css'

export default function Carousel({ arrayImg }) {
	const [index, setIndex] = useState(0)

	function previous() {
		if(index > 0){
			setIndex(res=>res-1)
		}else{
			setIndex(arrayImg.length - 1)
		}
	}

	function next() {
		if(index < arrayImg.length - 1){
			setIndex(res=>res+1)
		}else{
			setIndex(0)
		}
	}

	return (
		<div className='container_carousel'>
			<img className='img_carousel' src={arrayImg[index]}/>
			{	arrayImg?.length > 1 &&
				<div className='container_info_carousel'>
					<div  className='container_carousel_chevron'>
						<div className='carousel_chevron_item' onClick={previous}>
							<i className="fa-solid fa-chevron-left"></i>
						</div>
						<div className='carousel_chevron_item' onClick={next}>
							<i className="fa-solid fa-chevron-right"></i>
						</div>
					</div>
					
					<p className='text_ratio'>{index+1}/{arrayImg.length}</p>
				</div>
			}
			
		</div>
	)
}
