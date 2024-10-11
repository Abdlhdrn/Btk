const express = require ("express");

const router = express.Router();

const Kitap = require('../models/kitap');


const {fetchAllKitap,createKitap,fetchKitapById,deleteKitap,updateKitap} = require('../controllers/kitap');

router.route('/').post(createKitap);

router.route('/').get(fetchAllKitap);

router.route('/:id').get(fetchKitapById);

router.route('/:id').put(updateKitap);

router.route('/:id').delete(deleteKitap);




module.exports = router;
