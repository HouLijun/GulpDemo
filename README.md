gulp构建专题页面说明
### 安装依赖项
1. 全局安装 gulp：
`cnpm install --global gulp`

2. 作为项目的开发依赖（devDependencies）安装：
`npm install gulp --save-dev`

3. 安装gulp插件gulp-file-include（模板复用功能）
`npm install gulp-file-include --save-dev`

4. 安装gulp插件gulp-smushit（压缩图片功能）
`npm install gulp-smushit --save-dev`

5. 安装gulp插件gulp-uglify(压缩js功能)
`npm install gulp-uglify --save-dev`

5. 安装gulp插件gulp-gulp-clean-css(压缩css功能)
`npm install gulp-gulp-clean-css --save-dev`

### 新建开发文件夹
位置：zt-gulp -> dev -> page -> 文件夹命名[规则：日期-功能]（eg:2017-12-13-Christmas）

### 在开发的html页面内引用公用模块[例如：meat、头部、底部、右侧悬浮等]
	- 引用meta: `@@include('../../common/html/meta.html')`
	- 引用头部：`@@include('../../common/html/header.html')`
	- 引用底部：`@@include('../../common/html/footer.html')`

### 只需切图中间页面部分
### 使用cmd工具执行构建生成dist文件
`gulp`
