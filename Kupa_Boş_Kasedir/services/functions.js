const { getByIdKullanici, updateKullaniciById } = require("../services/kullanici");
const { getByIdKitap } = require("../services/kitap");
// const Kullanici = require("../models/kullanici");  // Sadece bir tane kullan

const newKitapSatinAl = async (req, res) => {
    const { kullaniciId, kitapId, miktar } = req.body;

    try {
        const kullanici = await getByIdKullanici(kullaniciId);
        if (!kullanici) {
            return res.status(404).json({ message: "Kullanıcı bulunamadı." });
        }

        const kitap = await getByIdKitap(kitapId);
        if (!kitap) {
            return res.status(404).json({ message: "Kitap bulunamadı." });
        }

        const sepetTutari = kitap.fiyati * miktar;
        if (kullanici.bakiye >= sepetTutari) {
            kullanici.bakiye -= sepetTutari;
            await updateKullaniciById(kullaniciId, { bakiye: kullanici.bakiye });  // Burada id ve body gönderiyoruz
            return res.status(200).json({ message: "Kitap satın alındı.", kalanBakiye: kullanici.bakiye });
        } else {
            return res.status(400).json({ message: "Yetersiz bakiye." });
        }
    } catch (error) {
        console.error("Hata:", error);
        return res.status(500).json({ message: "Bir hata oluştu." });
    }
};




module.exports = {
    newKitapSatinAl
};
