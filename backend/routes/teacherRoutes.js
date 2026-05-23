const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');

router.get('/', async (req, res) => {
    const teachers = await Teacher.find();
    res.json(teachers);
});

router.post('/', async (req, res) => {
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.json(teacher);
});

module.exports = router;