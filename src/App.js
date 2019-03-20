import React, {
  Component
} from 'react';
import { Icon, Layout, Menu, Breadcrumb } from 'antd';
import './App.css';

import logo from './static/logo3.png'


const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (<Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <span style={{
          width: '120px',
          height: '31px',
          float: 'left',
        }}>
          <img style={{ height: '39px', width: '100px', padding: '10%' }} src={logo} alt='Logo' />
        </span>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
      </Content>
      <Footer>
        {/* CREATED WITH <Icon type="heart" style={{color:'#4984FF'}} /> BY KELVIN LIU IN SYD. */}
        <p>CREATED WITH <Icon type="heart" style={{ color: 'red' }} /> BY KELVIN LIU IN SYD. </p>
        <p><Icon type="mail" />
          <a href="mailto:ycliuhw@gmail.com">:  ycliuhw@gmail.com</a>
        </p>
      </Footer>
    </Layout>
    );
  }
}

export default App;
