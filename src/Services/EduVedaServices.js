

class EduVedaServices {

createVerification (formData) {
fetch("http://localhost:3000/login",formData).then(res => console.log("Response: "+res));
}
}
export default new EduVedaServices();
