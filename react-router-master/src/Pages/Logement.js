import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import data from '../data/logement_data.json'
import Tag from '../components/Tags/Tag'
import Stars from '../components/Stars/Star'
import Host from '../components/Host/Host'
import styles from '../components/Host/Host_module.scss'

export default function Logement() {
  const [logement, setLogement] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    rating: '',
    host: { name: '', picture: '' },
  })

  const { id } = useParams()
  useEffect(() => {
    data.map((house) => {
      // Si l'id dans l'url correspond à l'id d'un data
      if (house.id === id) {
        setLogement(house)
        console.log(house)
      }
      return null
    })
  }, [id])

  return (
    <>
      <div>
        <h1>{logement.title}</h1>
        <h2>{logement.location}</h2>
        <div className="stars">
          <Stars score={logement.rating} />
        </div>
        <Tag logement={logement} />
        <div className="avatar-comp">
          <div className="avatar-name">
            <Host host={avatar.name} />
          </div>
          <div>
          <img className="avatar-picture">
          <Host src={avatar.picture} alt={avatar.id}/>
      </div>
      </div>
    </>
  )
}
