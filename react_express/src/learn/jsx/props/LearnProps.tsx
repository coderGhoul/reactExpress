import React, { memo } from 'react'

type Props = {
  src: string
  alt: string
}

export default memo(function LearnProps({ person, size = 400 }: any) {
  return (
    <img
      src={person.src}
      alt={person.alt}
      title={person.title}
      width={size}
      height={size}
    />
  )
})
