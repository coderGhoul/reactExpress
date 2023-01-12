# 渲染和提交

组件的渲染 一共分为三个步骤
触发渲染（将客人的订单送到厨房）
渲染组件（在厨房准备订单）
提交给 DOM（在表格上下订单）

1.触发渲染：就是相当于你下了个订单，我这边收到订单了，然后通知 react 准备渲染

2. 渲染组件：因为在 react 目前还是虚拟 dom
   无论是 vue 的 vNode 还是 react 的 FiberNode

3. 提交到 dom ：真实的 dom

jsx（）=> ReactElement => FiberNode =>dom

触发渲染的条件主要有两个 1.组件首屏渲染 2.组件的状态发生改变

### 1.组件首屏渲染

在 react 中在首屏渲染的在以前就是 React.createElement()
现在的
React.createRoot().render()

### 2.状态更新时重新渲染

1.类组件 的 setState 2.函数式组件的 useStateHooks 的 dispath

## 第 2 步：React 渲染您的组件

生成 workInprogerss 树 ，react 的 current 指向它的过程中 递归的过程 使用 dfs 从 FiberRootNode 开始去遍历

## 第 3 步：React 将更改提交到 DOM

对于初始渲染， React 将使用 appendChild()DOM API 将其创建的所有 DOM 节点放在屏幕上。
对于重新渲染， React 将应用最少的必要操作（在渲染时计算！）以使 DOM 匹配最新的渲染输出。
