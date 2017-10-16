## Sanrenxing

### [GitHub预览地址](https://xlldll.github.io/Sanrenxing-Demo/)

### 项目说明
- 通过根目录下的一级index.html跳转到根目录下Src文件夹目录下的Html
- Grunt脚手架进一步升级为开发环境以及生产环境，更加自动化，因此新增多个目录中转处理
- 已有主页和拜师页
- 主页：主要应用的技术有Bootstrap样式、requireJs模块化编程、多个Jquery插件、scss样式框架，初步完成用户登录注册验证模块、响应式导航栏、下拉显示多条件过滤型搜索框、首页走马广告、按条件过滤显示内容面板
- 拜师页：一个React单页应用，ECMA6、scss、完成路由跳转、师傅信息的增加Createt、读取Retrieve、更新Update、删除Delete、拆分组件，最后经由browserify打包
```txt
1. 定义根路由Router,内含多个子路由页面供跳转,MasterPicker跳转到App
2. 定义子路由页面的生命周期事件或函数,App
3. 子路由页面中的渲染，进一步划分为新组件,App.render=Header+Follow+Edit
4. 新组件的render也可进一步划分为多个子组件
```
