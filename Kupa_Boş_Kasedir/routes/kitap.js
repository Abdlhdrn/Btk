const express = require ("express");

const router = express.Router();

const Kitap = require('../models/kitap');

const {fetchAllKitap,createKitap,fetchKitapById,deleteKitap,updateKitap} = require('../controllers/kitap');

router.route('/').post(createKitap);




module.exports = router;
