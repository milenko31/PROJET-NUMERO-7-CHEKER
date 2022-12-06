import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import data from '../../data/logement_data.json'
import Tag from '../../components/Tags/Tag'
import Stars from '../../components/Stars/Star'
import Host from '../../components/Host/Host'
import Error from '../ErrorPage/Errorpage'
import Carrousel from '../../components/Carrousel/Carrousel'
import Dropdown from '../../components/Dropdown/Dropdown'

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

  if (logement.title === undefined) {
    return <Error />
  }
  const slidePics = logement && logement.pictures
  const equipments = logement && logement.equipments
  const equip =
    logement &&
    equipments.map((item, index) => (
      <li key={index} className="equipList">
        {item}
      </li>
    ))

  return (
    <>
      <div>
        <Carrousel slides={slidePics} />
        <div className="title_location_avatar">
          <div className="title_and_location">
            <h1 className="title">{logement.title}</h1>
            <h2 className="location">{logement.location}</h2>
            <Tag logement={logement} />
          </div>
          <div className="avatar-comp">
            <div className="avatar-name">
              <Host avatar={logement} />
            </div>
            <div className="stars">
              <Stars score={logement.rating} />
            </div>
          </div>
        </div>
        <div className="collapse-fiche-container">
          <Dropdown aboutTitle="Description" aboutText={logement.description} />
          <Dropdown aboutTitle="Équipements" aboutText={equip} />
        </div>
      </div>
    </>
  )
}
