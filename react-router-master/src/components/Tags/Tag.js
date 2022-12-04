import React from 'react'

function Tag({ logement }) {
  const tag = logement.tags
  const tagMap = tag.map((e, index) => (
    <p key={e} className="tagInfo">
      {' '}
      {logement.tags[index]}{' '}
    </p>
  ))
  return <div className="tag">{tagMap}</div>
}

export default Tag
