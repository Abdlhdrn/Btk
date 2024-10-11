const express = require ("express");

const router = express.Router();

const Kullanici = require('../models/kullanici');


const {fetchAllKullanici,createKullanici,fetchKullaniciById,deleteKullanici,updateKullanici} = require('../controllers/Kullanici');

router.route('/').post(createKullanici);

router.route('/').get(fetchAllKullanici);

router.route('/:id').get(fetchKullaniciById);

router.route('/:id').put(updateKullanici);

router.route('/:id').delete(deleteKullanici);




module.exports = router;
