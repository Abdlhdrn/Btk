
const Joi = require('joi');

// Kullanıcı için oluşturulacak Joi doğrulama şeması
const kullaniciSchema = Joi.object({
    adi: Joi.string().min(3).max(30).required(),
    soyadi: Joi.string().min(3).max(30).required(),
    tc: Joi.string().length(11).required(),  // TC kimlik numarası 11 karakter uzunluğunda olmalıdır
    dogum_tarihi: Joi.date().optional(),  // Opsiyonel olabilir
    aktiflik: Joi.boolean().optional().default(true),  // Varsayılan olarak aktiflik true
    sehir: Joi.string().min(2).max(50).optional(),
    bakiye: Joi.number().min(0).optional()  // Bakiye en az 0 olabilir
});

// Doğrulama fonksiyonu
const validateKullanici = (kullanici) => {
    return kullaniciSchema.validate(kullanici);
};

module.exports = validateKullanici;
