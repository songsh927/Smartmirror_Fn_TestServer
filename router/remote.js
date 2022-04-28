import express from 'express';
import 'express-async-errors';


const router = express.Router();

var statusData = {
    "lightStatus" : "off",
    "curtainStatus" : "off",
    "tempStatus" : "off",
}

router.get('/', (req, res, next) => {
    res.status(200).json(statusData);
});
/////////////////////////////
//  tempremote controller  //
//  Get status
router.get('/tempcontroller' , (req, res, next) => {
    res.status(200).json(statusData.tempStatus);
});
//  Update stauts
router.post('/tempcontroller' , (req, res, next) => {
    const ctrl = req.body.ctrl;
    statusData.tempStatus = ctrl;

    res.status(200).json(statusData.tempStatus);
});
/////////////////////////////

/////////////////////////////
//  light controller       //
//  Get status
router.get('/lightcontroller' , (req, res, next) => {
    res.status(200).json(statusData.lightStatus);
});
//  Update stauts
router.post('/lightcontroller' , (req, res, next) => {
    const ctrl = req.body.ctrl;
    statusData.lightStatus = ctrl;

    res.status(200).json(statusData.lightStatus);
});
/////////////////////////////

/////////////////////////////
//curtain controller       //
//  Get status
router.get('/curtaincontroller' , (req, res, next) => {
    res.status(200).json(statusData.curtainStatus);
});
//  Update stauts
router.post('/curtaincontroller' , (req, res, next) => {
    const ctrl = req.body.ctrl;
    statusData.curtainStatus = ctrl;

    res.status(200).json(statusData.curtainStatus);
});
/////////////////////////////
export default router;