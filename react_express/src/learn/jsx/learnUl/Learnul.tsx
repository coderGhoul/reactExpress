import React, { memo } from 'react'

export default memo(function Templacte() {
  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist',
  ]
  const item = people.filter((item) => <li>{item}</li>)
  return (
    <div>
      <ul>{item}</ul>
    </div>
  )
})
