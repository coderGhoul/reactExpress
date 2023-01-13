import React, { memo, useRef, useState } from 'react'

// export default memo(function Templacte() {
//   const ref = useRef(1)
//   function handleClick() {
//     ref.current += 1
//     alert(ref.current)
//   }
//   return <button onClick={handleClick}>click me</button>
// })

export default memo(function Templacte() {
  const [startTime, setStartTime] = useState(0)
  const [now, setNow] = useState(0)
  const intervalRef = useRef(0)
  let secondsPassed = 0
  function handleStart() {
    setStartTime(Date.now())
    setNow(Date.now())
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10)
  }
  function handleStop() {
    clearInterval(intervalRef.current)
  }
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000
  }
  return (
    <div>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
})
