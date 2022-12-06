import React from 'react'

export default function Host(host) {
  return (
    <div className="picture">
      <h3 className="hostName">{host.avatar.host.name}</h3>
      <img src={host.avatar.host.picture} className="imgPicture" />
    </div>
  )
}
