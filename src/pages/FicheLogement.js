import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import { useParams } from 'react-router-dom'
import { getAppartemmentById } from '../services/ServicesAppartement';
import Tag from '../components/Tag';
import Rating from '../components/Rating';

import '../css/FicheLogement.css'
import DropDown from '../components/DropDown';

export default function FicheLogement() {
  const {id} = useParams();
  const [infoAppart, setInfoAppart] = useState({
    id: "",
    title: "",
    cover: "",
    pictures: [],
    description: "",
    host: {
      name: "",
      picture: ""
    },
    rating: "0",
    location: "",
    equipments: [],
    tags: []
  }) 
  
  function fetchData() {
    const results = getAppartemmentById(id)
    if(results){
      setInfoAppart(results)
    }else{
      window.location.href = "/error"
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <div className='container'>
      <Carousel arrayImg={infoAppart.pictures} />
      <div className='row_for_desktop'>
        <div>
          <p className='fiche_title'>{infoAppart.title}</p>
          <p className='fiche_location'>{infoAppart.location}</p>
          <div className='fiche_tags'>
            {
              infoAppart.tags.length > 0 && infoAppart.tags.map((item,i)=>{
                return <Tag key={i} item={item} />
              })
            }
          </div>
        </div>
        <div className='fiche_info'>
          <Rating nbStars={parseInt(infoAppart.rating,10)}/>
          <div className='fiche_info_user'>
            <p className='fiche_user_name' >{infoAppart.host.name}</p>
            <div className='fiche_user_container_picture'>
              <img className='fiche_user_picture' src={infoAppart.host.picture} />
            </div>
          </div>
        </div>
      </div>
      
      <div className='fiche_desc'>
        <DropDown title="Description">
          <p>{infoAppart.description}</p>
        </DropDown>
        <DropDown title="Équipements">
          {
            infoAppart.equipments.map((item,i)=>{
              return <p key={i} >{item}</p>
            })
          }
        </DropDown>
      </div>
    </div>
  )
}
