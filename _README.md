

# json2image

通用的静态图片生成解决方案。

使用场景：

* H5 页面生成分享海报。
* 小程序下载分享图片。
* 小程序自定义分享卡片。



* 支持 JSON-UI 标准
  * 不同：
    * children 而不是 _children
    * image url 而不是 image href
    * 不支持 base64
    * 图片存在跨域的问题
    * 不支持阴影 spread 属性


## 使用



前端 CDN 引入：

```js

```

前端 npm 引入

```js
import json2iamge from '@yunser/json2image'
```

Node.js 引入

```js
const json2iamge = require('@yunser/canvas-node')
```

11

https://json-ui.yunser.com/example


## TODO

* lastChild bug
* 字体
* 导出 SVG。
* 导出 HTML。
* jsonUI
    * version
* 支持生成 svg。
* 支持导出。
* 官网。
* globalAlpha



https://github.com/Automattic/node-canvas


## CentOS 安装 node-canvas

yum install gcc-c++ cairo-devel pango-devel libjpeg-turbo-devel giflib-devel




visible，默认 true

outerWidth

* x
* y
* width



relative: 'root',



* Android 布局
* 



canvas 改过的地方

* 去掉 window
* 增加 module.exports



node node/index.js