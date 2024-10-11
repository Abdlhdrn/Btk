const mongoose = require ('mongoose');

const KitapSchema = new mongoose.Schema({
    adi : {type : String},
    yazari : {type : String},
    turu : {type : String},
    baski : {type : Number},
    sayfa_sayisi : {type : Number},

    fiyati : {type : Number},

    stok_durumu : {type : String},
    dili : {type : String}
});
const Kitap = mongoose.model("Kitap",KitapSchema);

module.exports = Kitap;
