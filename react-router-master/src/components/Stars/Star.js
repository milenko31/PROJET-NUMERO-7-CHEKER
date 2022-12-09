import React from 'react'
import emptyStar from '../../assets/img/étoile_vide.svg'
import fullStar from '../../assets/img/étoile.svg'

export default function Star({ score }) {
  const stars = [1, 2, 3, 4, 5]
  return (
    <div className="stars">
      {stars.map((level) =>
        score >= level ? (
          <img
            key={level.toString()}
            className="star"
            src={fullStar}
            alt="rating star"
          />
        ) : (
          //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
          <img
            key={level.toString()}
            className="star"
            src={emptyStar}
            alt="rating star"
          />
        ),
      )}
    </div>
  )
}
