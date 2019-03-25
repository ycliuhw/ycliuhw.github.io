import React, { useContext, useEffect, useState, useLayoutEffect } from 'react';
import {
  Icon, Layout, Menu, Breadcrumb, Button,
} from 'antd';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { AvatarInstagram } from './pages';
import logo from './static/logo3.png';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const MainLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [token, setToken] = useState("");
  const [currentPage, setCurrentPage] = useState("profile")

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header
          style={{
            background: '#fff',
            padding: 0,
            width: '100%',
          }}
        >
          <span style={{
            float: 'left',
          }}
          >
            <img style={{ height: '39px', width: '100px', padding: '10%' }} src={logo} alt="Logo" />
          </span>
          <Menu
            // theme="light"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Products</Menu.Item>
            <Menu.Item key="2">Contact</Menu.Item>
            <Menu.Item key="3">About</Menu.Item>
          </Menu>
        </Header>
        <hr />
        <Layout style={{ paddingTop: '0px' }}>
          <Sider
            trigger={null}
            collapsible
            theme="dark"
            // trigger={null}
            width={200}
            // collapsedWidth={80}
            // style={{ background: '#fff' }}
            collapsed={collapsed}
            onCollapse={v => setCollapsed(v)}
          >
            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys={[currentPage]}
              selectedKeys={[currentPage]}
              // defaultOpenKeys={['profile']}
              onClick={e => setCurrentPage(e.key)}
              style={{ height: '100%', borderRight: 0, }}
            >
              <Menu.Item
                key="profile"
              // style={{ height: '80px', padding: '10% 0 10% 0' }}
              >
                <Link to={'/profile'}>
                  <AvatarInstagram />
                </Link>
              </Menu.Item>
              <Menu.Item key="1">
                <Link to={'/follower'}>
                  <Icon type="follower" /><span>follower</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to={'/following'}>
                  <Icon type="following" /><span>following</span>
                </Link>
              </Menu.Item>
              <SubMenu key="other" title={<div><Icon type="laptop" /><span>other</span></div>}>
                <Menu.Item key="3">option5</Menu.Item>
              </SubMenu>
              <Menu.Item key="notification"><Icon type="notification" /><span>notification</span>
              </Menu.Item>
              <Menu.Item key="login">
                <Link to={'/login'}>
                  <Icon type="user" /><span>login</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>

          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <span style={{
                float: 'left',
                width: 50
              }}
              >
                <Icon
                  className="trigger"
                  type={collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={_ => setCollapsed(!collapsed)}
                />
              </span>
              <Breadcrumb
                style={{
                  // margin: '16px 0 16px 36px',
                  marginTop: '20px', marginBottom: '10px'
                }}
              >
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
            </Header>

            <Content
              style={{
                background: '#fff',
                padding: 24, margin: 0, minHeight: 280,
              }}
            >
              {props.children}
            </Content>

            <Footer
              style={{ textAlign: 'center', padding: "10px 0 0 0" }}
            >
              <p>
                CREATED WITH <Icon type="heart" theme="twoTone" twoToneColor="#4984FF" /> BY KELVIN LIU IN SYD @2019.
              {/* CREATED WITH <Icon type="heart" theme="twoTone" twoToneColor="red" }} /> BY KELVIN LIU IN SYD @2019. */}
              </p>
              {/* <p>
              <Icon type="mail" />
              <a href="mailto:ycliuhw@gmail.com">:  ycliuhw@gmail.com</a>
            </p> */}
            </Footer>
          </Layout>

        </Layout>
      </Layout>
    </Router>
  );
}

export default MainLayout;
