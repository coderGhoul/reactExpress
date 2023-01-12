import { useState } from 'react'
let componentHooks: any[] = []
let currentIndex = 0

export function myUseState<S>(init: S) {
  let pair: any = componentHooks[currentIndex] // let pair  =componentHooks[0] = undefined/empty 第二次存放name的时候
  // 如果有值就不是第一次渲染 第二次就发现第一次有值
  if (pair) {
    currentIndex++ // 相当于指针++
    return pair // 并且返回上一个pair
  }
  // 第一次执行
  pair = [init, setState] // let pair = [0,setCount]

  function setState(nextState: S) {
    pair[0] = nextState
    // 重新渲染
  }

  return pair
}

//返回的是里面pair
/**
 * 很简单看一下pair两次分别是什么
 *1.第一次渲染：pair = [init,setState]
 *
 *2。第二次渲染 pair = [nextState,setState]。并且刷新整个页面（根据update updateContainer）
 *
 *在函数内部 记录
 * 相当于 我们记录下来state的值，和对应的索引
 * **/
const [count, setCount] = myUseState(0) // [0,setState]

const [name, setName] = useState('coderghoul') // ['coder',setstate]
