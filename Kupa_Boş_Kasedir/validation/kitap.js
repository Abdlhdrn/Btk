const Joi = require('joi');

// Kitap için oluşturulacak Joi doğrulama şeması
const kitapSchema = Joi.object({
    adi: Joi.string().min(3).max(100).required(),  // Adı zorunlu, minimum 3 maksimum 100 karakter olmalı
    yazari: Joi.string().min(3).max(100).required(),  // Yazar adı zorunlu
    turu: Joi.string().min(3).max(50).optional(),  // Türü isteğe bağlı
    baski: Joi.number().integer().min(1).optional(),  // Baskı numarası, pozitif bir tamsayı
    sayfa_sayisi: Joi.number().integer().min(1).optional(),  // Sayfa sayısı, pozitif bir tamsayı
    fiyati: Joi.number().precision(2).min(0).required(),  // Fiyat zorunlu ve en az 0 olmalı
    stok_durumu: Joi.string().valid('var', 'yok').required(),  // Stok durumu "var" veya "yok" olmalı
    dili: Joi.string().min(2).max(50).optional()  // Dil isteğe bağlı
});

// Doğrulama fonksiyonu
const validateKitap = (kitap) => {
    return kitapSchema.validate(kitap);
};

module.exports = validateKitap;
