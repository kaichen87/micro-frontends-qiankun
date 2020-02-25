
# 运行

```
cd main-project

yarn install:all

yarn start

```

访问 http://localhost:5100/

# 项目配置

## 主项目

参照main-project

## 子项目

### 1. angular项目配置

#### 安装依赖包

  `ng add single-spa-angular`
  
#### 添加打包配置文件

在子项目修改extra-webpack.config.js配置文件

```
const webpackMerge = require('webpack-merge');

module.exports = (config, options) => {
  const singleSpaConfig = {
    output: {
      library: 'app-name',
      libraryTarget: 'umd'
    },
    externals: {
      'zone.js': 'Zone'
    }
  };
  const mergedConfig = webpackMerge.smart(config, singleSpaConfig);
  return mergedConfig;
};
```
*注：app-name 需要改为子项目的名称*

#### 修改子项目main.single-spa.ts

改为如下代码

```
import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import singleSpaAngular from 'single-spa-angular';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

if (environment.production) {
  enableProdMode();
}

let bootstrap: any;
let mount: any;
let unmount: any;

if (!!(window as any).__POWERED_BY_QIANKUN__) {
  const lifecycles = singleSpaAngular({
    bootstrapFunction: singleSpaProps => {
      singleSpaPropsSubject.next(singleSpaProps);
      return platformBrowserDynamic().bootstrapModule(AppModule);
    },
    template: '<app-root />',
    Router,
    NgZone: NgZone,
  });

  bootstrap = lifecycles.bootstrap;
  mount = lifecycles.mount;
  unmount = lifecycles.unmount;
} else {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
}

export { bootstrap, mount, unmount };

```

### 2. react项目配置

[参照官方DEMO](https://github.com/umijs/qiankun/tree/master/examples)

### 3. vue 项目配置

[参照官方DEMO](https://github.com/umijs/qiankun/tree/master/examples)