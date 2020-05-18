import express from 'express';
import bodyParser from 'body-parser';
var testAPIRouter = require("../routes/routeAPI");

var app = express();

app.use("/login", testAPIRouter);

