import express from 'express';
import 'express-async-errors';


const router = express.Router();

var statusData = {
    "lightStatus" : "off",
    "curtainStatus" : "off",
    "tempStatus" : "off",
}

var lightStatus = {
    "ctrl": "off",
    "redValue": "",
    "greenValue": "",
    "blueValue": ""
}

var curtainStatus = {
    "ctrl" : "off",
    "openTime" : "",
    "closeTime" : ""
}

var tempStatus = {
    "ctrl" : "off",
    "onTime" : "",
    "offTime" : ""
}

router.get('/', (req, res, next) => {
    console.log(statusData);
    res.status(200).json(statusData);
});
/////////////////////////////
//  tempremote controller  //
//  Get status
router.get('/tempcontroller' , (req, res, next) => {
    console.log(statusData.tempStatus);
    res.status(200).json(statusData.tempStatus);
});
//  Update stauts
router.post('/tempcontroller/:ctrl' , (req, res, next) => {
    const ctrl = req.params.ctrl;
    statusData.tempStatus = ctrl;

    console.log(statusData.tempStatus);
    res.status(200).json(statusData.tempStatus);
});
/////////////////////////////

/////////////////////////////
//  light controller       //
//  Get status
router.get('/lightcontroller' , (req, res, next) => {
    console.log(statusData.lightStatus);
    res.status(200).json(statusData.lightStatus);
});
//  Update stauts
router.post('/lightcontroller/:ctrl' , (req, res, next) => {
    const ctrl = req.params.ctrl;
    statusData.lightStatus = ctrl;

    console.log(statusData.lightStatus);
    res.status(200).json(statusData.lightStatus);
});
/////////////////////////////

/////////////////////////////
//curtain controller       //
//  Get status
router.get('/curtaincontroller' , (req, res, next) => {
    console.log(statusData.curtainStatus);
    res.status(200).json(statusData.curtainStatus);
});
//  Update stauts
router.post('/curtaincontroller/:ctrl' , (req, res, next) => {
    const ctrl = req.params.ctrl;
    statusData.curtainStatus = ctrl;

    console.log(statusData.curtainStatus);
    res.status(200).json(statusData.curtainStatus);
});
/////////////////////////////
export default router;