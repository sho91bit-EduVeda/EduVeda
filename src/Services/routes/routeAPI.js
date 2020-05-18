import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
var router = express.Router();
const config = require("../config");

router.get('/', function(req, res, next) {
    console.log("Working")
    res.send('API is working properly');
});

router.get('/login',formData,(req,res) => {
    client.verify.services(config.serviceID).verifications.create({
    to:formData.telephoneNumber,
    channel:'sms'
}).then((data) => {
    res.status(200).send(data)
})
})

module.exports = router;