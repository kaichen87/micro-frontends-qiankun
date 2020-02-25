import React from 'react';
import ReactDom from 'react-dom';
import MainPage from './pages/MainPage';
import SubAppContent from './pages/SubAppContent';
import 'zone.js';
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';

function render() {
  const container = document.getElementById('container');
  ReactDom.render(<MainPage />, container);
}

function getActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

function initApp() {
  render();
}

function renderContainer1({ appContent, loading }) {
  const container = document.getElementById('container__1');
  ReactDom.render(<SubAppContent content={appContent} />, container);
}

function renderContainer2({ appContent, loading }) {
  const container = document.getElementById('container__2');
  ReactDom.render(<SubAppContent content={appContent} />, container);
}

function renderContainer3({ appContent, loading }) {
  const container = document.getElementById('container__3');
  ReactDom.render(<SubAppContent content={appContent} />, container);
}

initApp();

registerMicroApps(
  [
    {
      name: 'sub-app-cms',
      entry: '//localhost:5101',
      render: renderContainer1,
      activeRule: getActiveRule('/cms')
    },
    {
      name: 'sub-app-sms',
      entry: '//localhost:5102',
      render: renderContainer2,
      activeRule: getActiveRule('/sms'),
    },
    {
      name: 'sub-app-system',
      entry: '//localhost:5103',
      render: renderContainer3,
      activeRule: getActiveRule('/system')
    }
  ],
  {
    beforeLoad: [
      app => {
        console.log('before load', app);
      },
    ],
    beforeMount: [
      app => {
        console.log('before mount', app);
      },
    ],
    afterUnmount: [
      app => {
        console.log('after unload', app);
      },
    ],
  },
);

setDefaultMountApp('/cms');

runAfterFirstMounted(() => console.info('first app mounted'));

start({ prefetch: true });
