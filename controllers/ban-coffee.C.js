const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('postdetail/ban-coffee', {
        layout: 'postdetail'
    });
    return;
});


module.exports = router;