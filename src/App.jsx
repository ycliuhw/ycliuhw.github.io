import React, { useContext, useEffect, useState, useLayoutEffect } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Icon, Layout, Menu, Breadcrumb,
} from 'antd';

import logo from './static/logo3.png';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  let logoSize = collapsed ? '80px' : '120px';
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* <Header style={{ width: '100%' }}>
        <span style={{
          float: 'left',
        }}
        >
          <img style={{ height: '39px', width: '100px', padding: '10%' }} src={logo} alt="Logo" />
        </span>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Products</Menu.Item>
          <Menu.Item key="2">Contact</Menu.Item>
          <Menu.Item key="3">About</Menu.Item>
        </Menu>
      </Header> */}
      <Layout style={{ paddingTop: '0px' }}>
        <Sider
          collapsible
          theme="dark"
          // trigger={null}
          width={200}
          collapsedWidth={80}
          // style={{ background: '#fff' }}
          collapsed={collapsed}
          onCollapse={v => setCollapsed(v)}
        >
          <span style={{
            float: 'left',
          }}
          >
            <img style={{ height: '39px', width: logoSize, padding: '10%', margin: '0px auto', textAlign: 'center' }} src={logo} alt="Logo" />
          </span>
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['profile']}
            style={{ height: '100%', borderRight: 0, }}
          >
            {/* <Menu.Item key="1">Products</Menu.Item>
            <Menu.Item key="2">Contact</Menu.Item>
            <Menu.Item key="3">About</Menu.Item> */}

            <SubMenu key="profile" title={<div><Icon type="user" /><span>Profile</span></div>}>
              <Menu.Item key="1">follower</Menu.Item>
              <Menu.Item key="2">following</Menu.Item>
            </SubMenu>
            <SubMenu key="other" title={<div><Icon type="laptop" /><span>other</span></div>}>
              <Menu.Item key="3">option5</Menu.Item>
            </SubMenu>
            <Menu.Item key="notification"><Icon type="notification" /><span>notification</span>
            </Menu.Item>
          </Menu>
        </Sider>



        <Layout>
          <Breadcrumb style={{ margin: '16px 0 16px 16px' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>

          <Content
            style={{
              background: '#fff',
              padding: 24, margin: 0, minHeight: 280,
            }}
          >
            Content
          </Content>
          <Footer
            style={{ textAlign: 'center', padding: "10px 0 0 0" }}
          >
            <p>
              CREATED WITH <Icon type="heart" style={{ color: '#4984FF' }} /> BY KELVIN LIU IN SYD @2019.
              {/* CREATED WITH <Icon type="heart" style={{ color: 'red' }} /> BY KELVIN LIU IN SYD @2019. */}
            </p>
            {/* <p>
              <Icon type="mail" />
              <a href="mailto:ycliuhw@gmail.com">:  ycliuhw@gmail.com</a>
            </p> */}
          </Footer>
        </Layout>

      </Layout>
    </Layout >
  );
}

export default App;
