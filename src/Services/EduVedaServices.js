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

    async createUserRecordOnSignUp(uid, userData) {
        firebase.database().ref('users/' + uid).set(userData, (error) => {
            if (error) {
              // The write failed...
              console.log("Create Error: "+error)

            } else {
                console.log("Record Created");
            }
        });
    }

    async updateUserProfile(uid, userData) {
      firebase.database().ref('users/' + uid).set(userData, (error) => {
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
          return user.val() === null ? Promise.reject("User Not Found") : Promise.resolve(user.val())
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
            
            const userData = {
              userId: user.providerData[0].uid,
              fullName: user.displayName,
              email: user.email,
              roles: 'student',
              phoneNumber : user.phoneNumber,
              photoURL : user.photoURL
            };
            
            return Promise.resolve(userData);
            // ...
          }).catch(function(error) {
            return Promise.reject(error);
          });
    }

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

async getAllNotifications(){
  return firebase.database().ref('/notification').once('value').then((notification) => {
    return notification.val() === null ? Promise.reject("Notifications Not Found") : Promise.resolve(notification.val())
  }).catch((error) => {
      console.log("Error: "+error);
  return Promise.reject(error);
  });
}

async pushNotifications(notifications) {
  firebase.database().ref('notification/').set(notifications, (error) => {
    if (error) {
      // The write failed...
      console.log(error)

    } else {
        console.log("Record Updated");
    }
});
}
}
export default new EduVedaServices();
