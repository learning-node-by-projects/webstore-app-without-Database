const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    // Now to send a file we can use direct ./views/shop.js
    // But as we know paths are different on windows and linus as
    // windows use \ so we will use core node module path.join
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    console.log(adminData.products);
});

module.exports = router;