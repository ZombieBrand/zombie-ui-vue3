# Button 按钮

常用操作按钮

## 基础用法

基础的函数用法

::: v-pre
使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。
:::

 <div style="margin-bottom:20px;">
   <ZButton type="default">default</ZButton>
    <ZButton type="primary">primary</ZButton>
    <ZButton type="success">success</ZButton>
    <ZButton type="warning">waring</ZButton>
    <ZButton type="error">error</ZButton>
 </div>

::: details code

```js
<div style="margin-bottom:20px;">
  <ZButton type="default">主要按钮</ZButton>
  <ZButton color="green">绿色按钮</ZButton>
  <ZButton color="gray">灰色按钮</ZButton>
  <ZButton color="yellow">黄色按钮</ZButton>
  <ZButton color="red">红色按钮</ZButton>
</div>
```

:::
