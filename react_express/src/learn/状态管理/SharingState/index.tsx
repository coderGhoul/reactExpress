import React, { memo, useState } from 'react'
// import { Children, useState } from 'react';
type Ipros<T> = {
  title: string
  children: T
  isshowDesc: boolean
  onShow: any
}
function SateSection({ title, children, isshowDesc, onShow }: Ipros<string>) {
  return (
    <div>
      <h2>{title}</h2>
      {isshowDesc ? <p>{children}</p> : <button onClick={onShow}>展示</button>}
    </div>
  )
}

export default memo(function SharedState() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div>
      <SateSection
        title="标题"
        isshowDesc={activeIndex == 0}
        onShow={() => setActiveIndex(0)}
      >
        展示展示展示展示展示展示展示展示展示展示展示
      </SateSection>
      <SateSection
        title="标题"
        isshowDesc={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        展示展示展示展示展示展示展示展示展示展示展示
      </SateSection>
    </div>
  )
})
