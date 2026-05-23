const express = require('express');
const router = express.Router();
const Result = require('../models/Result');

router.get('/', async (req, res) => {
    const results = await Result.find();
    res.json(results);
});

router.post('/', async (req, res) => {
    const result = new Result(req.body);
    await result.save();
    res.json(result);
});

module.exports = router;