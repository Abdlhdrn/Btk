const mongoose = require ('mongoose');

const KitapSchema = new mongoose.Schema({
    adi : {type : string},
    yazari : {type : string},
    turu : {type : string},
    baski : {type : Number},
    sayfa_sayisi : {type : Number},

    fiyati : {type : Number},

    stok_durumu : {type : string},
    dili : {type : string}
});
const Kitap = mongoose.model("Kitap",KitapSchema);

module.exports = Kitap;
