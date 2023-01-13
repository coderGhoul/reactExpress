import React, { Children, ReactNode, memo } from 'react'

export default memo(function Card({ children }: any) {
  return (
    <div>
      我是一张卡片
      {children}
    </div>
  )
})
