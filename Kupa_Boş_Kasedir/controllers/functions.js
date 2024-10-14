const { newKitapSatinAl } = require('../services/functions');

const satinAl = async (req, res, next) => {
    try {
        
        const { KullaniciId, KitapId,miktar } = req.body;
        // `miktar` hala `req.body`'den gelecek

        // Satın alma işlemi için ilgili fonksiyona parametreleri geçiyoruz
        const sonuc = await newKitapSatinAl(KullaniciId, KitapId, miktar);

        // İşlem başarılıysa sonucu döndürüyoruz
        return res.status(200).json(sonuc);
    } catch (error) {
        // Hata durumunda hata mesajını döndürüyoruz
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    satinAl
};
