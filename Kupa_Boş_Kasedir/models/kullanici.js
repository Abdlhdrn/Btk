const mongoose = require('mongoose');

// Kullanıcı şeması oluşturuluyor
const KullaniciSchema = new mongoose.Schema({
    adi: { type: String, required: true },
    soyadi: { type: String, required: true },
    tc: { type: String, required: true },  // TC kimlik numarası genelde string olarak tutulur
    dogum_tarihi: { type: Date },
    aktiflik: { type: Boolean, default: true },  // Varsayılan olarak aktif olsun
    sehir: { type: String },
    bakiye: { type: Number },

});

// Kullanıcı modelini oluşturuyoruz
const Kullanici = mongoose.model("Kullanici", KullaniciSchema);

module.exports = Kullanici;
    