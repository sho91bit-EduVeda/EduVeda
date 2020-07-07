import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    userName: null,
    user: {
      email: null,
  		name: null,
  		phoneNumber: null,
  		userId: null,
  		userType: null
    },
    showLogin:false,
    showSignup:false,
    authRedirectPath: '/'
};

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
    return updateObject( state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
     } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, userId: null, user: {} });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}

const addUserStart = ( state, action ) => {
    return updateObject( state, { error: null } );
};

const addUserSuccess = (state,action) => {
  return updateObject(state, { userName: action.name });
};

const addUserFail = (state, action) => {
    return updateObject( state, {
        error: action.error
    });
};

const getUserDetailsStart = ( state, action ) => {
    return updateObject( state, { error: null } );
};

const getUserDetailsSuccess = ( state, action ) => {
  const user = {
    ...action.userInfo
  };

  return updateObject( state, { error: null, user: user } );
};

const getUserDetailsFail = (state, action) => {
    return updateObject( state, {
        error: action.error
    });
};

const showSignInOrSignUp = (state, action) => {
  return updateObject(state, {showLogin:action.showLogin, showSignup:action.showSignUp});
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        case actionTypes.ADD_USER_START: return addUserStart(state, action);
        case actionTypes.ADD_USER_SUCCESS: return addUserSuccess(state, action);
        case actionTypes.ADD_USER_FAIL: return addUserFail(state, action);
        case actionTypes.GET_USER_DETAILS_START: return getUserDetailsStart(state, action);
        case actionTypes.GET_USER_DETAILS_SUCCESS: return getUserDetailsSuccess(state, action);
        case actionTypes.GET_USER_DETAILS_FAIL: return getUserDetailsFail(state, action);
        case actionTypes.SHOW_SIGNIN_OR_SIGNIN: return showSignInOrSignUp(state, action);
        default:
            return state;
    }
};

export default reducer;
