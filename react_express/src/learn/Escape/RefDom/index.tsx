// import React, { memo, useRef } from 'react'

// export default memo(function Templacte() {
//   const inputRef = useRef<any>(null)
//   function handlerClickFocus() {
//     inputRef.current?.focus()
//   }
//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handlerClickFocus}>Focus</button>
//     </div>
//   )
// })

import React, { memo, useRef } from 'react'

const catList = []
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i,
  })
}

export default memo(function Templacte() {
  const firstCatRef = useRef<any>(null)
  const secondCatRef = useRef<any>(null)
  const thirdCatRef = useRef<any>(null)

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }
  return (
    <div>
      <nav>
        <button onClick={handleScrollToFirstCat}>Tom</button>
        <button onClick={handleScrollToSecondCat}>Maru</button>
        <button onClick={handleScrollToThirdCat}>Jellylorum</button>
      </nav>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '500px',
          overflow: 'hidden',
        }}
        {catList.map(cat=>}
      ></ul>
    </div>
  )
})
