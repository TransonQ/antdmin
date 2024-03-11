# antdmin

antd 作为后台 UI 的 react 模板

## 技术栈

- [MSW (Mock Service Worker) 模拟接口](https://mswjs.io/)
- [Jotai 状态管理](https://jotai.org/)
- [js-cookie 操作 cookie](https://github.com/js-cookie/js-cookie)
- [antd 界面 UI 库](https://ant.design/)
- [antd theme-editor](https://ant-design.antgroup.com/theme-editor-cn)
- [swr 服务端状态管理](https://swr.vercel.app/)
- [react-router-dom 流行的 react 客户端路由库](https://reactrouter.com)
- [react-use 开源方便的 hooks 库](https://github.com/streamich/react-use)
- [styled-components 流行的 css-in-js 库](https://styled-components.com/)
- [react-hot-toast](https://react-hot-toast.com/)

## 模板信息 React + TypeScript + Vite

这个模板提供了一个最小的设置，让 React 在 Vite 中使用 HMR 和一些 ESLint 规则工作。

目前，有两个官方插件可用：

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) 使用[Babel](https://babeljs.io/) 用于快速刷新
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) 使用[SWC](https://swc.rs/) 用于快速刷新

## Expanding the ESLint configuration

如果要开发生产应用程序，建议更新配置以启用类型感知 lint 规则：

- 配置顶级 'parserOptions' 属性，如下所示：

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
