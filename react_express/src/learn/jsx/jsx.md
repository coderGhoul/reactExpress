# jsx

今天是第一天简单的复习一下 jsx 在这里我们使用 tsx

## 我的理解

按照我的理解 JSX 是 JavaScript 可以写出类似于 html 的一种扩展。

> 这里我偷取了 beta.reactjs.org 官网的三个问题 <br/> 1.为什么 React 将 HTML 与渲染逻辑混合在一起 <br/>
> 2.JSX 与 HTML 有何不同 <br/> 3.如何用 JSX 显示信息

### 使用 JavaScript 编写 HTML

每个 React 组件本质都是一个 JavaScript 的函数。React 组件使用 JSX 的语法扩展。JSX 看起来很像 HTML，但更严格一些，并且可以显示动态信息。

我们这里拿到一些官网的例子

```HTML
<h1>Hedy Lamarr's Todos</h1>
<img
  src="https://i.imgur.com/yXOvdOSs.jpg"
  alt="Hedy Lamarr"
  class="photo"
>
<ul>
    <li>Invent new traffic lights
    <li>Rehearse a movie scene
    <li>Improve the spectrum technology
</ul>

```

如果这里不考虑程序是否可以正确的运行。我们 jsx 代码可以这么写

```Javascript and XML
export default function TodoList() {
  return (
    // This doesn't quite work!
    <h1>Hedy Lamarr's Todos</h1>
    <img
      src="https://i.imgur.com/yXOvdOSs.jpg"
      alt="Hedy Lamarr"
      class="photo"
    >
    <ul>
      <li>Invent new traffic lights
      <li>Rehearse a movie scene
      <li>Improve the spectrum technology
    </ul>
  );
}

```

但是上面这个例子如果你这么写，我们一定会报错，原因我们接着往下看。
首先我们要知道一个结果：JSX 比 HTML 更严格并且有更多的规则。

JSX 规则

- 1.返回单个根元素
  <p>如果又熟悉 Vue2 的大佬们,就很熟悉这种规则，就是在template中有一个父级元素</p>
  如果没有用过Vue2的大佬们，返回的元素如果不是一个那么就要被一个类似于div的元素包裹住。
  但是如果你要是不想额外的添加其他的内容，可以想使用html的template 一样使用空标签,比如像下面这么写。

```javascript
<>
  <h1>我不想我都你为了规范去迫害我原有的结构</h1>
  <img
    src="https://i.imgur.com/yXOvdOSs.jpg"
    alt="Hedy Lamarr"
    class="photo"
  >
  <ul>
    ...
  </ul>
</>
```

> 这里官方提出了一个 DEEP DIVE 的问题<br/>
> 为什么需要包裹多个 JSX 标签？

这个原因也很简单，那就是因为 JSX 虽然看着像 HTML，但是在底层会被转换成 JavaScript 对象（如果有对 JavaScript 不太熟悉的兄弟们这里我推荐可以去 MDN 简单的了解一下或者去现代 JavaScript 教程看一下对应的内容。文章最后我也会给一些链接），如果不把他们包装到一个片段或者标签这中，则不能从函数返回两个对象。

- 2.关闭所有标签
  这一点，我相信很多兄弟们即使是写 html 的时候也会通常这么写，但是在 JSX 中更为重要。

- 3.camelCase 所有大部分东西！
  这里主要还是书接上文，因为你写的 jsx 都是在底层转换后都是 JavaScript 对象，那么在上面的属性，都会转成对象的 key。但是 JavaScript 对变量名有限制。例如，它们的名称不能包含破折号或像 . 这样的保留字 class。所以在 React 中会将你属性的某些 html 的属性转换成对应的其他属性，比如 class 会转换成 clssName

这里有的大佬就会说，jsx 真麻烦我就不爱这么写。

这里官方给出了一个小 tip

专业提示：使用 JSX 转换器（如果后续我学习到了相关的知识也会进行简单源码的分析）
转换现有标记中的所有这些属性可能很乏味！我们建议使用转换器将现有的 HTML 和 SVG 转换为 JSX。转换器在实践中非常有用，但仍然值得了解发生了什么，这样您就可以轻松地自己编写 JSX。

就是你可以正常的快乐的编写 HMTL 然后一股脑扔进 html。

看完我抄袭了官网的这一节，相信你已经可以大概了解了 JSX 是怎么同步的实现对应的 HTML。如果您是带着上面三个问题阅读的，可以自己回答一下上面的三个问题。

## 使用 JSX 编写标记

这里咱们还是紧跟着上一行章的脚步来走。

我们上一章看了官网在实现用 JSX 同步的 实现了 HTML 的值
即完全都是静态的。在这一章官网讲解了怎么使用动态的传值。

我们仍然还是抄袭官方的三个问题

> 你将学习如何传递带引号的字符串 <br/>
> 如何使用大括号在 JSX 中引用 JavaScript 变量<br/>
> 如何使用大括号在 JSX 中调用 JavaScript 函数<br/>
> 如何在带有花括号的 JSX 中使用 JavaScript 对象<br/>

- 传递带引号的字符串
  当我们将一个字符串传递给 JSX 的时候，我们就是通常的传到""当中。

```Javascript and XML

export default function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}

```

在这种情况下非常简单就是啪一引用就能完成对应部分的引用。
那么问题来了比方说我们这个地方想让这个值是动态的 熟悉 vue 的小伙伴就说了我使用 v-bind 完成绑定 或者是 我用{{}}语法。

在 jsx 中其实就更加一目了然,举个例子。

```Javascript and XML
export default function Avatar() {
  const avatarImg = "https://i.imgur.com/7vQD0fPs.jpg"
  const avatarDes = "Gregorio Y. Zara"
  const
  return (
    <img
      className="avatar"
      src={avatarImg}
      alt={avatarDes}
    />
  );
}
```

总结一下：这不就是定义了一个{} 在 {}里面使用了 JavaScript 吗，非常了然。下面咱就里里外外好好看看这个{}在 JSX 到底咋样。

### 使用大括号：进入 JavaScript 世界的窗口

- 1. 最简单的用法赋值

```Javascript and XML
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoList() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}
```

兄弟们咱看了这串代码 有没有感觉有几分相似之处，在我看来这不就是咱熟悉的`模板字符串他穿了个小马甲`，不用`` 省了个$吗？

那有的兄弟会说了，那这个东西这么好用咋能不能全篇都用什么都是动态的，咱标签也是动态的，咱<括号也是动态的，咱就是讲究一个动态。

那老话讲，以约失之者鲜矣。就是约束自己很多的人很少犯错。

咱到程序这也一样，他得有约定的范围。

### 在哪里使用大括号

你只能在 JSX 中以两种方式使用大括号：

- 1. 文本内容
- 2. 跟着 = 后面的属性

什么？你问其他的能不能用？还真有几种“双卷轴可以用”。

有的兄弟问了，什么是双卷轴？ “这 react 也是火影迷？”
NO！ 双卷轴在我这里就是使用大括号语法，只不过语法里面包裹了一层对象。

咱比如下面的这个例子

```Javascript and XML
export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```

但是在这里你可千万别忘了 这里面的属性都是 key 没有— 只有驼峰。

得到这咱们又是抄袭了一节内容，列位要是想看一些其他内容，我建议咱是去官网看看原版文档。或者看一下大佬写的文章。或者咱真枪实弹的干一下子。


