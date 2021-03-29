import firebase from './../Firebase/index';

class AdminServices {

    //Fetches the details of website like name, email, address etc. displayed on Contact Us Page
    async fetchWebsiteInfo() {
        return firebase.database().ref('/website').once('value').then((websiteDetails) => {
            return Promise.resolve(websiteDetails.val());
          }).catch((error) => {
              console.log("Error: "+error);
          return Promise.reject(error);
          });
    }

    async submitQueriesToEduveda(uid, formData){
        return firebase.database().ref('contactus/' + uid).set(formData, (error) => {
            if (error) {
              // The write failed...
              console.log(error)
              return Promise.resolve(error);
            } else {
                console.log("Record Created");
                return Promise.resolve("Record Created");
            }
        });
    } 
}

export default new AdminServices();