import React, { memo } from 'react'

export default memo(function Templacte() {
  return (
    <div>
      <Item naem="span" ispick={true} />
      <Item naem="div" ispick={false} />
    </div>
  )
})

function Item({ naem, ispick }: any) {
  if (ispick) {
    return null
  }
  return <li className="item">{naem}</li>
}
