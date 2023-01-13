import React, { memo } from 'react'
import { useState } from 'react'

export default memo(function Templacte() {
  // const [showB, setShowB] = useState(true)
  const [isFance, setIsFancy] = useState(false)

  return (
    <div>
      {/* <Container />
      {showB && <Container />}
      <button onClick={() => setShowB(!showB)}>toggle</button> */}
      {/* {isFance && <Container />}
      {!isFance && <Container />} */}
      {isFance ? <Container key="bob" /> : <Container key="alice" />}
      <button onClick={() => setIsFancy(!isFance)}>toggle</button>
    </div>
  )
})

function Container() {
  const [count, setCount] = useState(0)
  const [hover, setHover] = useState(false)
  let className = 'counter'
  if (hover) {
    className += ' hover'
  }
  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
