import React from 'react'

export default function Host(avatar) {
  return (
    <div className="avatar-comp">
      <div className="avatar-name">{avatar.name}</div>
      <div className="avatar-picture">
        <img src={avatar.picture} alt={avatar.id} />
      </div>
    </div>
  )
}
