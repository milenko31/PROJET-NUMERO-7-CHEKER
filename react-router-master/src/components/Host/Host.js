import React from 'react'

export default function Host(host) {
  return (
    // Ici tu récupère une variable qu'on appel HOST mais idem tu l'appel comme tu souhaite
    // dedans ta toutes les information donc une clés avatar qui dispose d'un tableau host avec des infos
    // Comme d'habitude console.log ton meilleurs ami :)
    <div className="avatar-comp">
      <div className="avatar-name">{host.avatar.host.name}</div>
      <div className="avatar-picture">
        <img src={host.avatar.host.picture} />
      </div>
    </div>
  )
}
