import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom';
import Home from '../../routes/Home';
import Form from '../../routes/Form';
import Login from '../../routes/Login';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Header, Sider, Content } = Layout;

const LoggedOutRouters = () => (
  <Switch>
    <Route path={'/'} exact component={Login} />
    <Redirect from={'*'} to={'/'} />
  </Switch>
);

const LoggedInRouters = ({ user, onLogout }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { email, name } = user;

  const onClick = () => setCollapsed(!collapsed);

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/">리스트</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/form">등록</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 24,
            lineHeight: 'initial',
            background: '#fff',
          }}
        >
          {collapsed ? <MenuUnfoldOutlined onClick={onClick} /> : <MenuFoldOutlined onClick={onClick} />}
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <li>{email}</li>
            <li>{name}</li>
            <li>
              <button onClick={onLogout}>로그아웃</button>
            </li>
          </ul>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: '#fff',
          }}
        >
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/form'} component={Form} />
            <Redirect from={'*'} to={'/'} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

const AppPresenter = ({ isLoggedIn, user, onLogout }) => {
  return (
    <BrowserRouter>
      {isLoggedIn ? <LoggedInRouters user={user} onLogout={onLogout} /> : <LoggedOutRouters />}
    </BrowserRouter>
  );
};

export default AppPresenter;

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool,
};
