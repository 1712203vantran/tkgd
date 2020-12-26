const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('home/vietbai', {
        layout: 'vietbai'
    });
    return;
});


module.exports = router;