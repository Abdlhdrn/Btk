const { getByIdKullanici, updateKullaniciById } = require("../services/kullanici");
const { getByIdKitap } = require("../services/kitap");

const newKitapSatinAl = async (req, res, next) => {
    const { KullaniciId, KitapId, miktar } = req.body;

    try {
        // Miktarın tamsayıya çevrilmesi
        const miktarInt = parseInt(miktar, 10);
        if (isNaN(miktarInt) || miktarInt <= 0) {
            return res.status(400).json({ message: "Miktar geçerli ve pozitif bir sayı olmalıdır." });
        }

        // Kullanıcıyı veritabanından çek
        const kullanici = await getByIdKullanici(KullaniciId);
        if (!kullanici) {
            return res.status(404).json({ message: "Kullanıcı bulunamadı." });
        }

        // Kitabı veritabanından çek
        const kitap = await getByIdKitap(KitapId);
        if (!kitap) {
            return res.status(404).json({ message: "Kitap bulunamadı." });
        }

        // Sepet tutarını hesapla
        const sepetTutari = kitap.fiyati * miktarInt;

        // Yetersiz bakiye kontrolü
        if (kullanici.bakiye >= sepetTutari) {
            // Bakiye düşür ve kaydet
            kullanici.bakiye -= sepetTutari;
            await updateKullaniciById(KullaniciId, { bakiye: kullanici.bakiye });

            // Satın alma başarılı yanıtı gönder
            return res.status(200).json({
                message: "Kitap satın alındı.",
                kalanBakiye: kullanici.bakiye
            });
        } else {
            // Yetersiz bakiye durumu
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
