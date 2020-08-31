import React from 'react';
import { Layout, Form, Input, Button, Alert } from 'antd';
import 'antd/dist/antd.css';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LoginPresenter = ({ onChange, onSubmit, localMsg }) => {
  return (
    <Layout style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Form {...layout} name="basic" onFinish={onSubmit}>
        {localMsg && <Alert message={localMsg} type="error" showIcon style={{ marginBottom: '10px' }} />}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input name="email" onChange={onChange} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password name="password" onChange={onChange} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            LOGIN
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default LoginPresenter;
