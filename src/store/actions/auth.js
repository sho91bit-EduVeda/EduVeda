import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const addUserStart = () => {
    return {
        type: actionTypes.ADD_USER_START
    };
};

export const addUserSuccess = (name) => {
    return {
        type: actionTypes.ADD_USER_SUCCESS,
        userName: name
    };
};

export const addUserFail = (error) => {
    return {
        type: actionTypes.ADD_USER_FAIL,
        error: error
    };
};

export const getUserDetailsStart = () => {
    return {
        type: actionTypes.GET_USER_DETAILS_START
    };
};

export const getUserDetailsSuccess = (user) => {
  return {
    type:actionTypes.GET_USER_DETAILS_SUCCESS,
    userInfo: user
  };
};

export const getUserDetailsFail = (error) => {
    return {
        type: actionTypes.GET_USER_DETAILS_FAIL,
        error: error
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const addUserOnSignUp = (localId,fullName, email, phoneNumber, userType) => {
  return dispatch => {
    dispatch(addUserStart());
    const userData = {
      userId: localId,
      name: fullName,
      email: email,
      phoneNumber: phoneNumber,
      userType: userType
    };

    let dbUrl = "https://eduveda-b62d6.firebaseio.com/users.json";

    axios.post(dbUrl, userData)
        .then(response => {
            console.log(response.data);
          dispatch(addUserSuccess(response.data.name));
        })
        .catch(err => {
          console.log(err.response.data);
            dispatch(addUserFail(err.response.data.error));
        });
      };
};

export const getLoggedInUser = (localId) => {
  return dispatch => {
    dispatch(getUserDetailsStart());
    const queryParam = '?userId='+localId;
    let dbUrl = "https://eduveda-b62d6.firebaseio.com/users.json"+ queryParam;

    axios.get(dbUrl)
        .then(response => {
            console.log(response.data);
            let user = {};
            for(let key in response.data){
              user = {
                ...response.data[key],
              };
            }
            dispatch(getUserDetailsSuccess(user));
        })
        .catch(err => {
          console.log(err.response.data);
          dispatch(getUserDetailsFail(err.response.data.error));
        });
  };
};

export const auth = ( fullName, phoneNumber, userType,email, password, isSignup) => {
  console.log(email);
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBc97fC5mzrhhvHnHVFwTOPpJohS_jkimo';
        if (!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBc97fC5mzrhhvHnHVFwTOPpJohS_jkimo';
        }

        axios.post(url, authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeout(response.data.expiresIn));
                if(isSignup){
                  dispatch(addUserOnSignUp(response.data.localId,fullName, email, phoneNumber, userType));
                }
                else {
                  dispatch(getLoggedInUser(response.data.localId));
                }
                dispatch(showLoginForm(false,false));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };
};

export const showLoginForm = (showLogin,showSignup) => {
  return {
    type: actionTypes.SHOW_SIGNIN_OR_SIGNIN,
    showLogin: showLogin,
    showSignUp: showSignup
  };
};
