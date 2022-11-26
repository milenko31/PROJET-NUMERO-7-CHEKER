import React from 'react'
import image2 from '../../assets/img/picture_about.png'
import styles from './About_module.scss'
import Dropdown from '../../components/Dropdown/Dropdown'

export default function About() {
  return (
    <>
      <div className="picture_and_text_2">
        <img
          className="heading_picture_2"
          src={image2}
          alt="image au top de la page about"
        />
        <p className="text_on_picture_2">Chez vous, partout et ailleurs</p>
        <div className="container_all_dropdown">
          <Dropdown
            aboutTitle="Fiabilité"
            aboutText="Les annonces postées sur Kasa garantissent une fiabilité totale.
           Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
          <Dropdown
            aboutTitle="Respect"
            aboutText="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire 
            ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Dropdown
            aboutTitle="Service"
            aboutText="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
          N'hésitez pas à nous contacter si vous avez la moindre question."
          />
          <Dropdown
            aboutTitle="Responsabilité"
            aboutText="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
           Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
    </>
  )
}
