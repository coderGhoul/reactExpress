import React, { createContext, memo, useContext } from 'react'

const LevelContext = createContext(1)

export default memo(function Templacte() {
  return (
    <div>
      <Section>
        <Heading>Title</Heading>
        <Section>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  )
})

function Section({ children }: any) {
  const level = useContext(LevelContext)

  return (
    <LevelContext.Provider value={level + 1}>{children}</LevelContext.Provider>
  )
}

function Heading({ children }: any) {
  const level = useContext(LevelContext)
  switch (level) {
    case 1:
      return <h1>{children}</h1>
    case 2:
      return <h2>{children}</h2>
    case 3:
      return <h3>{children}</h3>
    case 4:
      return <h4>{children}</h4>
    case 5:
      return <h5>{children}</h5>
    case 6:
      return <h6>{children}</h6>
    default:
      throw Error('Unknown level: ' + level)
  }
}
