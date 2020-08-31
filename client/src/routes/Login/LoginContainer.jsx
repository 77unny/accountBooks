import axios from 'axios';
import React from 'react';
import LoginPresenter from './LoginPresenter';

const LoginContainer = () => {
  const onFinish = values => {
    const { email, password } = values;
    console.log('Success:', values);
    axios
      .post(`${process.env.REACT_APP_API_LOGIN}`, {
        email: email,
        password: password,
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return <LoginPresenter onFinish={onFinish} onFinishFailed={onFinishFailed} />;
};

export default LoginContainer;
