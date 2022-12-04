import React from 'react'
import styles from './Host_module_.scss'

export default function Host(host) {
  return (
    <div>
      <div className="avatar-comp">
        <div className="avatar-picture">
          <img src={host.avatar.host.picture} />
        </div>
      </div>
      <div className="avatar-name">{host.avatar.host.name}</div>
    </div>
  )
}
