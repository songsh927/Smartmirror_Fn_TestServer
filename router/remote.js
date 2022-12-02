import express from 'express';
import 'express-async-errors';
const router = express.Router();


var lightModule = {
    "ctrl": "off",
    "redValue": "",
    "greenValue": "",
    "blueValue": ""
}

var curtainModule = {
    "ctrl" : "off",
    "onTime" : "",
    "offTime" : ""
}

var tempModule = {
    "ctrl" : "off",
    "onTime" : "",
    "offTime" : "",
    "temp" : ""
}


/////////////////////////////
//  tempremote controller  //
//  Get status
router.get('/4' , (req, res, next) => {
    res.status(200).json(tempModule);
});
//  Update stauts
router.post('/4' , (req, res, next) => {
    const {ctrl, onTime, offTime, temp} = req.body;
    tempModule.ctrl = ctrl;
    tempModule.onTime = onTime;
    tempModule.offTime = offTime;
    tempModule.temp = temp;
    res.status(200).json(tempModule);
});
/////////////////////////////

/////////////////////////////
//  light controller       //
//  Get status
router.get('/3' , (req, res, next) => {
    res.status(200).json(lightModule);
});
//  Update stauts
router.post('/3' , (req, res, next) => {
    const {ctrl, redValue, greenValue, blueValue} = req.body;
    console.log('req: ',req.body);

    lightModule.ctrl = ctrl;
    lightModule.redValue = redValue;
    lightModule.greenValue = greenValue;
    lightModule.blueValue = blueValue;
    res.status(200).json(lightModule);
});
/////////////////////////////

/////////////////////////////
//curtain controller       //
//  Get status
router.get('/5' , (req, res, next) => {
    res.status(200).json(curtainModule);
});
//  Update stauts
router.post('/5' , (req, res, next) => {
    const {ctrl, onTime, offTime} = req.body;

    curtainModule.ctrl = ctrl;
    curtainModule.onTime = onTime;
    curtainModule.offTime = offTime;
    res.status(200).json(curtainModule);
});
/////////////////////////////

router.post('/controller/:ctrl',(req, res, next) => {
    const ctrl = req.params.ctrl;
    const opts = req.query;
    console.log(ctrl);
    console.log(opts);
    res.sendStatus(200);
})

router.get('/status/:ctrl', (req, res, next) => {
    const ctrl = req.params.ctrl;

    if(ctrl == 'lightStatus'){
        res.status(200).json(lightStatus);
    }else if(ctrl == 'curtainStatus'){
        res.status(200).json(curtainStatus);
    }else{
        res.status(200).json(tempStatus);
    }
})

export default router;
