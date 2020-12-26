const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('postdetail/blanc-coffee', {
        layout: 'postdetail'
    });
    return;
});


module.exports = router;