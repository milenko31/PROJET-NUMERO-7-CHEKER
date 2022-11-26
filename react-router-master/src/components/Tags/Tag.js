import React from 'react'
import styles from './Tag_module.scss'

function Tag({ logement }) {
  const tag = logement.tags
  const tagMap = tag.map((e, index) => <p key={e}> {logement.tags[index]} </p>)
  return (
    <div className="tag">
      <ul>
        <li className="tag_sub">{tagMap}</li>
      </ul>
    </div>
  )
}

export default Tag
