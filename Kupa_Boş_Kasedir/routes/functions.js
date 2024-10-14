const express = require("express");
const router = express.Router();

// const Kullanici = require('../models/kullanici');

// const Kitap = require('../models/kitap');


const { satinAl } = require('../controllers/functions');

// Route parametrelerini `/` ile ayırarak doğru bir şekilde tanımladık
router.route('/satin-al').post(satinAl);

module.exports = router;