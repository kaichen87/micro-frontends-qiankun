
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

console.log((window as any).__POWERED_BY_QIANKUN__);
if (!(window as any).__POWERED_BY_QIANKUN__) {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

const { bootstrap, mount, unmount } = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic().bootstrapModule(AppModule);
  },
  template: '<app-root />',
  Router,
  NgZone: NgZone,
});

export { bootstrap, mount, unmount };

// let bootstrap: any;
// let mount: any;
// let unmount: any;


// if (!!(window as any).__POWERED_BY_QIANKUN__) {
//   const lifecycles = singleSpaAngular({
//     bootstrapFunction: singleSpaProps => {
//       singleSpaPropsSubject.next(singleSpaProps);
//       return platformBrowserDynamic().bootstrapModule(AppModule);
//     },
//     template: '<app-root />',
//     Router,
//     NgZone: NgZone,
//   });

//   bootstrap = lifecycles.bootstrap;
//   mount = lifecycles.mount;
//   unmount = lifecycles.unmount;
// } else {

//   platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

//   // bootstrap = () => {
//   //   console.log('angular8 app ums bootstraped');
//   // };
//   // mount = () => {
//   //   console.log('angular8 app ums mount');
//   // };
//   // unmount = () => {
//   //   console.log('angular8 app ums unmount');
//   // };
// }

// export { bootstrap, mount, unmount };
