import moment from 'moment';
import googleAuthProvider , { firebase }  from './../../Firebase/index';

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
  return dispatch => {
    firebase.auth().signOut().then(function() {
      dispatch(authLogout());
    }).catch(function(error) {
      console.log("Error on logout "+ error);
    });
  };
};

export const authLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
  return{
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

export const eduvedaSignUp = (fullName , phoneNumber , roles , email , passwordOne) => {
  return dispatch => {
    dispatch(authStart());
      firebase.auth().createUserWithEmailAndPassword(email, passwordOne).then(authUser => {
        // Create a user in your Firebase realtime database
        firebase.database().ref('users/' + authUser.user.uid).set({
          fullName,
          email,
          phoneNumber,
          roles
        }, (error) => {
          if (error) {
            dispatch(addUserFail(error.response.data.error));
          } else {
            firebase.auth().currentUser.getIdTokenResult().then(response => {
              const expirationDate = new Date(new Date().getTime() + new Date(response.expirationTime).getTime() * 1000);
              localStorage.setItem('token', response.token);
              localStorage.setItem('expirationDate', expirationDate);
              localStorage.setItem('userId', authUser.user.uid);
              dispatch(authSuccess(response.token,firebase.auth().currentUser.uid));
              //dispatch(checkAuthTimeout(new Date(response.expirationTime).getTime()));
            })
            dispatch(getLoggedInUser(authUser.user.uid));
            dispatch(addUserSuccess(fullName));
            dispatch(showLoginForm(false,false));
          }
        });
      }).then(() => {
        return firebase.auth().currentUser.sendEmailVerification();
      }).catch(error => {
        console.log("Error on SignUp: "+JSON.stringify(error));
        //dispatch(authFail(error.response.data.error));
        /*if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }*/
      });
  }
}

export const eduvedaSignIn = (email, password) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      firebase.auth().currentUser.getIdTokenResult().then(response => {
        console.log("Expiration Time: "+response.expirationTime);

        const expirationDate = new Date(new Date().getTime() + new Date(response.expirationTime).getTime() * 1000);
        localStorage.setItem('token', response.token);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', firebase.auth().currentUser.uid);
        dispatch(authSuccess(response.token,firebase.auth().currentUser.uid));
        //dispatch(checkAuthTimeout(new Date(response.expirationTime).getTime()));
      })
      dispatch(getLoggedInUser(firebase.auth().currentUser.uid));
      dispatch(showLoginForm(false,false));
    }).catch(error => {
      console.log("Error on SignIn: "+JSON.stringify(error));
          //this.setState({ error });
    });
  }
}

export const getLoggedInUser = (localId) => {
  return dispatch => {
    dispatch(getUserDetailsStart());
    firebase.database().ref('/users/' + localId).once('value').then((user) => {
      const userData = user.val();
      //dispatch(isBirthdayToday(userData));
      dispatch(getUserDetailsSuccess(userData));
    }).catch(err => {
      console.log("Error");
      //dispatch(getUserDetailsFail(err.response.data.error));
    });
  };
};


export const showSurpriseForm = (showBdaySurprise,isBdayToday) => {
  return {
    type: actionTypes.SHOW_BDAY_SURPRISE,
    showSurprise: showBdaySurprise,
    isBdayToday : isBirthdayToday
  };
};

export const isBirthdayToday = (user) =>{
  return dispatch => {
    let todaysDate = moment(new Date()).format("DD-MM");
    let userDob = moment(user.dob).format("MM-DD");

    if(todaysDate === userDob) {
      dispatch(showSurpriseForm(true,true));
    }
    else {
      dispatch(showSurpriseForm(false,false));
    }
  };
};

export const showLoginForm = (showLogin,showSignup) => {
  return {
    type: actionTypes.SHOW_SIGNIN_OR_SIGNIN,
    showLogin: showLogin,
    showSignUp: showSignup
  };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(getLoggedInUser(userId));
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }
        }
    };
};

export const startGoogleLogin = () => {
  return dispatch => {
		return firebase.auth().signInWithPopup(googleAuthProvider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(JSON.stringify(user));
      const userData = {
        userId: user.uid,
        fullName: user.displayName,
        email: user.email,
        roles: 'student'
      };
      dispatch(getUserDetailsSuccess(userData));
      dispatch(authSuccess(token, user.uid));
      dispatch(showLoginForm(false,false));
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
	};
};
