import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginPresenter from './LoginPresenter';
import { LOGIN_REQUEST } from '../../redux/types';

const LoginContainer = () => {
  const [localMsg, setLocalMsg] = useState('');
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const { errorMsg } = useSelector(state => state.auth);

  useEffect(() => {
    try {
      setLocalMsg(errorMsg);
    } catch (e) {
      console.log(e);
    }
  }, [errorMsg]);

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    const { email, password } = form;
    const user = { email, password };
    dispatch({
      type: LOGIN_REQUEST,
      payload: user,
    });
  };

  return <LoginPresenter onChange={onChange} onSubmit={onSubmit} localMsg={localMsg} />;
};

export default LoginContainer;
