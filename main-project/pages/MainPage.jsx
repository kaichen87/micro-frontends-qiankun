import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { useState } from 'react';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const MainPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const goto = (title, href) => {
    window.history.pushState({}, title, href);
  };

  return (
    <Layout style={{ height: '100%' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {/* <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="upload" />
                CMS
              </span>
            }
          >
            <Menu.Item key="11" onClick={() => window.history.pushState({}, '', '/cms/article/a1')}>
              A1
            </Menu.Item>
            <Menu.Item key="12" onClick={() => window.history.pushState({}, '', '/cms/article/a2')}>
              A2
            </Menu.Item>
            <Menu.Item key="13" onClick={() => window.history.pushState({}, '', '/cms/book/b1')}>
              B1
            </Menu.Item>
            <Menu.Item key="14" onClick={() => window.history.pushState({}, '', '/cms/book/b2')}>
              B2
            </Menu.Item>
            <Menu.Item key="10" onClick={() => window.history.pushState({}, '', '/cms/document')}>
              DOC
            </Menu.Item>
          </SubMenu> */}
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="upload" />
                CMS
              </span>
            }
          >
            <Menu.Item key="11" onClick={() => goto('cms', '/cms/article/a1')}>
              A1
            </Menu.Item>
            <Menu.Item key="12" onClick={() => goto('cms', '/cms/article/a2')}>
              A2
            </Menu.Item>
            <Menu.Item key="13" onClick={() => goto('cms', '/cms/book/b1')}>
              B1
            </Menu.Item>
            <Menu.Item key="14" onClick={() => goto('cms', '/cms/book/b2')}>
              B2
            </Menu.Item>
            <Menu.Item key="15" onClick={() => goto('cms', '/cms/document')}>
              DOC
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="user" />
                SMS
              </span>
            }
          >
            <Menu.Item key="21" onClick={() => goto('sms', '/sms/record/r1')}>
              R1
            </Menu.Item>
            <Menu.Item key="22" onClick={() => goto('sms', '/sms/record/r2')}>
              R2
            </Menu.Item>
            <Menu.Item key="23" onClick={() => goto('sms', '/sms/template/t1')}>
              T1
            </Menu.Item>
            <Menu.Item key="24" onClick={() => goto('sms', '/sms/template/t2')}>
              T2
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="video-camera" />
                System
              </span>
            }
          >
            <Menu.Item key="31" onClick={() => goto('system', '/system/system1')}>
              System1
            </Menu.Item>
            <Menu.Item key="32" onClick={() => goto('system', '/system/system2')}>
              System2
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon className="trigger" type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={toggle} />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            height: '100%',
          }}
        >
          <div id="container__1"></div>
          <div id="container__2"></div>
          <div id="container__3"></div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainPage;
