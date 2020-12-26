const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('category/quan-nuoc-view-dep', {
        layout: 'category'
    });
    return;
});


module.exports = router;