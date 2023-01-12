import React, { memo } from 'react'
import { useState } from 'react'

export default memo(function LearnState() {
  //Hooks 是react渲染时才可用
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1)
          setCount(count + 2)
          setCount(count + 3)
        }}
      >
        +10
      </button>
      {/* <button
        onClick={() => {
          setCount(count + 1)
          alert(count)
        }}
      >
        +3
      </button> */}
    </div>
  )
})
