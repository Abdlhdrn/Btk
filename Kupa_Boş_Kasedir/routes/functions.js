const express = require("express");
const router = express.Router();

const { satinAl } = require('../controllers/functions');

// Route parametrelerini `/` ile ayırarak doğru bir şekilde tanımladık
router.route('/satin-al/:KullaniciId/:KitapId').put(satinAl);

module.exports = router;