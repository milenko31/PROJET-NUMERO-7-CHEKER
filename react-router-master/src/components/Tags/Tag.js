import React from 'react'

function Tag({ logement }) {
  const tag = logement.tags
  const tagMap = tag.map((e, index) => <p key={e}> {logement.tags[index]} </p>)
  return <div>{tagMap}</div>
}

export default Tag
