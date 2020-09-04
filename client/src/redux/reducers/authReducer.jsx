import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  CLEAR_ERROR_REQUEST,
  CLEAR_ERROR_SUCCESS,
  CLEAR_ERROR_FAILURE,
  USER_LOADING_SUCCESS,
  USER_LOADING_FAILURE,
  USER_LOADING_REQUEST,
} from '../types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: '',
  userId: '',
  userName: '',
  userRole: '',
  errorMsg: '',
  successMsg: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST:
    case LOGIN_REQUEST:
      return {
        ...state,
        errorMsg: '',
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        userId: action.payload.user.id,
        userRole: action.payload.user.role,
        errorMsg: '',
      };
    case LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      return {
        token: null,
        user: null,
        userId: null,
        isAuthenticated: true,
        isLoading: false,
        userRole: null,
        errorMsg: '',
      };
    case LOGOUT_FAILURE:
    case LOGIN_FAILURE:
      localStorage.removeItem('token');
      return {
        ...state,
        ...action.payload,
        token: null,
        user: null,
        userId: null,
        isAuthenticated: false,
        isLoading: false,
        userRole: null,
        errorMsg: action.payload.data.msg,
      };
    case USER_LOADING_REQUEST:
      console.log('Redux : USER_LOADING_REQUEST');
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADING_SUCCESS:
      console.log('Redux : USER_LOADING_SUCCECSS');
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
        userId: action.payload._id,
        userName: action.payload.name,
        userRole: action.payload.role,
      };
    case USER_LOADING_FAILURE:
      console.log('Redux : USER_LOADING_FAILURE');
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
        userRole: '',
      };
    case CLEAR_ERROR_REQUEST:
    case CLEAR_ERROR_SUCCESS:
    case CLEAR_ERROR_FAILURE:
      return {
        ...state,
        errorMsg: null,
      };
    default:
      return state;
  }
};

export default authReducer;
