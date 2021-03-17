import firebase from './../Firebase/index';

class EduVedaServices {

    async eduvedaSignUpUsingEmail(email , password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          return Promise.resolve(userCredential.user);
        })
        .catch((error) => {
            console.log("Error: "+error);
            return Promise.reject(error);
        });
    }

    async createUserRecordOnSignUp(uid, fullName , email, phoneNumber, roles, LoginMethod,photoURL,gender) {
        firebase.database().ref('users/' + uid).set({
            fullName,
            email,
            phoneNumber,
            roles,
            LoginMethod,
            photoURL,
            gender
          }, (error) => {
            if (error) {
              // The write failed...
              console.log(error)

            } else {
                console.log("Record Created");
            }
        });
    }

    async updateUserProfile(uid, fullName,email, phoneNumber,mobileNumber,address, gender) {
      firebase.database().ref('users/' + uid).set({
          fullName: fullName,
          email: email,
          phoneNumber : phoneNumber,
          gender : gender,
          mobileNumber: mobileNumber,
          address: address
        }, (error) => {
          if (error) {
            // The write failed...
            console.log(error)

          } else {
              console.log("Record Updated");
          }
      });
  }

    async onLogout() {
        return firebase.auth().signOut().then(() => {
            // Sign-out successful.
            return Promise.resolve("Sign-out successful.");
          }).catch((error) => {
            // An error happened.
            return Promise.reject(error);
          });
    }

    async eduvedaLogIn(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                return Promise.resolve(userCredential.user);
            })
            .catch((error) => {
                console.log("Error: "+error);
            return Promise.reject(error);
            });
    }

    async getLoggedInUser(localId) {
        return firebase.database().ref('/users/' + localId).once('value').then((user) => {
            return Promise.resolve(user.val());
        }).catch((error) => {
            console.log("Error: "+error);
        return Promise.reject(error);
        });
    }

    async eduvedaLogInWithProvider(provider) {
        return await firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            //var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log("Response : "+JSON.stringify(user));
            
            const userData = {
              userId: user.providerData[0].uid,
              fullName: user.displayName,
              email: user.email,
              roles: 'student',
              phoneNumber : user.phoneNumber,
              photoUrl : user.photoURL
            };
            
            return Promise.resolve(userData);
            // ...
          }).catch(function(error) {
            return Promise.reject(error);
          });
    }

  // async eduvedaLogInWithFacebook() {
  //   return await firebase.auth().signInWithPopup(facebookAuthProvider).then(function(result) {
  //       /** @type {firebase.auth.OAuthCredential} */
  //       //var credential = result.credential;

  //       // The signed-in user info.
  //       var user = result.user;

  //       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //       //var accessToken = credential.accessToken;

  //       const userData = {
  //         userId: user.providerData[0].uid,
  //         fullName: user.displayName,
  //         email: user.email,
  //         phoneNumber : user.phoneNumber,
  //         roles: 'student'
  //       };

  //       return Promise.resolve(userData);

  //       // ...
  //     }).catch(function(error) {
  //       return Promise.reject(error);
  //     });
  // }

  async eduvedaResetPassword(email) {
    return firebase.auth().sendPasswordResetEmail(email).then(response => {
      return Promise.resolve(response);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  async fetchSignInMethodUsingEmail(email) {
    return firebase.auth().fetchSignInMethodsForEmail(email).then(response => {
      console.log(JSON.stringify(response[0]));
      return Promise.resolve(response[0]);
    }).catch(error => {
      return Promise.reject(error);
    });
}
}
export default new EduVedaServices();
