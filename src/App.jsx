import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Icon, Layout, Menu, Breadcrumb,
} from 'antd';
import './App.css';

import logo from './static/logo3.png';


const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <span style={{
        width: '120px',
        height: '31px',
        float: 'left',
      }}
      >
        <img style={{ height: '39px', width: '100px', padding: '10%' }} src={logo} alt="Logo" />
      </span>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Products</Menu.Item>
        <Menu.Item key="2">Contact</Menu.Item>
        <Menu.Item key="3">About</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
      </Content>
    </Layout>
    <Footer
      style={{ textAlign: 'center' }}
    >
      <p>
        {/* CREATED WITH <Icon type="heart" style={{ color: '#4984FF' }} /> BY KELVIN LIU IN SYD. */}
        CREATED WITH <Icon type="heart" style={{ color: 'red' }} /> BY KELVIN LIU IN SYD.
      </p>
      <p>
        <Icon type="mail" />
        <a href="mailto:ycliuhw@gmail.com">:  ycliuhw@gmail.com</a>
      </p>
    </Footer>
  </Layout>
);

export default App;
