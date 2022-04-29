import express from 'express';
import 'express-async-errors';
import {body} from 'express-validator';
import {validate} from '../middleware/validator.js';


const router = express.Router();

const validateSchedule = [
    body('date')
        .isLength({min: 8, max: 8})
        .withMessage('Date is must be YYYYMMDD'),
    body('title')
        .notEmpty()
        .withMessage('title must be not empty'),
    body('text')
        .trim()
        .notEmpty()
        .withMessage('text must be not empty'),
    validate
]

let scheduleData = [
    {
        'id': '1',
        'date': '20220428',
        'title': '회의',
        'text': '캡스톤 회의'
    },
    {
        'id': '2',
        'date': '20220429',
        'title': '약속',
        'text': '술약속'
    },
    {
        'id': '3',
        'date': '20220430',
        'title': '여행',
        'text': '부산여행'
    }
]

//Get all schedule
router.get('/' , (req, res, next) => {
    const date = req.query.date;
    if(date){
        const data = scheduleData.filter((schedule) => schedule.date === date)
        console.log(data);
        res.status(200).json(data);
    }else{
        res.status(200).json(scheduleData);
    }
});
//Get particular schedule
router.get('/:id' , (req, res, next) =>{
    const id = req.params.id;
    const data = scheduleData.find((schedule) => schedule.id === id)
    console.log(data);
    res.status(200).json(data)
});
//Post schedule
router.post('/' , validateSchedule ,(req, res, next) =>{
    const {date,title,text} = req.body;
    const schedule = {
        id: Date.now().toString(),
        date : date.toString(),
        title : title.toString(),
        text : text.toString()
    };
    scheduleData = [...scheduleData, schedule];

    console.log(data);
    res.status(201).json(schedule);
});
//Update schedule
router.put('/:id' , validateSchedule ,(req, res, next) =>{
    const id = req.params.id
    const data = scheduleData.find((schedule) => schedule.id === id);
    const {date, title, text} = req.body;

    data.date = date;
    data.title = title;
    data.text = text;

    console.log(data);
    res.status(200).json(data);
});
//Delete schedule
router.delete('/:id' , (req, res, next) =>{
    const id = req.params.id;

    scheduleData = scheduleData.filter((schedule) => schedule.id !== id)
    
    console.log(scheduleData);
    res.sendStatus(204);
});

export default router;