const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('home/homepage', {
        layout: 'home'
    });
    return;
});


module.exports = router;