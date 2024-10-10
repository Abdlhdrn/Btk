const mongoose = require ('mongoose');

const KullaniciSchema = new mongoose.model({
    adi : {type : string},
    soyadi : {type : string},
    tc : {type : Number},
    dogum_tarihi : {type : Date},
    aktiflik : {type : Boolean},

    şehir : {type : string},
    dili : {type : string}
});
const Kitap = mongoose.model("Kitap",KitapSchema);

module.exports = Kitap;
