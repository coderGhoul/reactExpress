import React, { ReactElement, memo } from 'react'

type Iprops = {
  message: any
  children: string
}
function Button({ message, children }: Iprops) {
  function handleClick() {
    console.log('按钮被点击')
  }
  return (
    // <div>
    //   <button onClick={handleClick}>点击按钮</button>
    // </div>
    //   <div>
    //     {/* <button
    //       onClick={function () {
    //         console.log('按钮被点击')
    //       }}
    //     >
    //       点击按钮
    //     </button> */}
    //     <button
    //       onClick={() => {
    //         console.log('按钮被点击')
    //       }}
    //     >
    //       点击事件
    //     </button>
    //   </div>
    // )
    // <button onClick={() => alert(message)}>{children}</button>
    <button onClick={message}>{children}</button>
  )
}

// export default memo(function Templacte() {
//   function handleClick() {
//     console.log('被点击')
//   }
//   function handleClickStill() {
//     console.log('还在被点击')
//   }
//   return (
//     <div>
//       <Button message={handleClick}>被点击</Button>
//       <Button message={handleClickStill}>还在被点击</Button>
//     </div>
//   )
// })

export default memo(function Templacte() {
  return (
    <div
      onClick={() => alert('父级元素被点击')}
      style={{
        border: '1px soild black',
        backgroundColor: 'skyblue',
        padding: '20px',
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation()
          alert('被点击')
        }}
      >
        第一个按钮
      </button>
      <button onClick={() => alert('第二个按钮被点击')}>第二个按钮</button>
    </div>
  )
})
