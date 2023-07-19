import React,{useEffect,useState} from 'react'

import "../css/Home.css"
import Thumb from '../components/Thumb'
import {getListAppartemment} from '../services/ServicesAppartement'

export default function Home() {

  const [listAppart, setListAppart] = useState([])

  function fetchData() {
    const results = getListAppartemment()
    setListAppart(results)
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <div className='container'>
      <div className='home_banniere'>
        <h1 className='home_banniere_title'>Chez vous, partout et ailleurs</h1>
      </div>
      <div className='home_liste'> 
        {
          listAppart.length > 0 && listAppart.map((item)=>{
            return <Thumb key={item.id} item={item} />
          })
        }
      </div>
    </div>
  )
}