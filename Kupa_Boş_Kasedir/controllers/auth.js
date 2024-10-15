const Kullanici = require('../models/kullanici');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // bcrypt yerine bcryptjs kullanıyorsunuz

// Kullanıcı kayıt işlemi
const register = async (req, res) => {
    const { adi, soyadi, tc, dogum_tarihi, sehir, kullaniciAdi, sifre } = req.body;

    try {
        // Şifreyi hash'le
        const hashedSifre = await bcrypt.hash(sifre, 10);

        // Yeni kullanıcı oluştur
        const yeniKullanici = new Kullanici({
            adi,
            soyadi,
            tc,
            dogum_tarihi,
            sehir,
            kullaniciAdi,
            sifre: hashedSifre // Hash'lenmiş şifreyi burada kaydediyoruz
        });

        await yeniKullanici.save(); // Kullanıcıyı veritabanına kaydet
        return res.status(201).json({ message: "Kullanıcı başarıyla kaydedildi." });
    } catch (error) {
        console.error("Kayıt hatası:", error);
        return res.status(500).json({ message: "Kayıt sırasında bir hata oluştu." });
    }
};

// Kullanıcı giriş işlemi
const signin = async (req, res) => {
    const { kullaniciAdi, sifre } = req.body;

    try {
        // Kullanıcıyı bul
        const kullanici = await Kullanici.findOne({ kullaniciAdi });

        // Kullanıcı bulunamadıysa hata döndür
        if (!kullanici) {
            return res.status(404).json({ message: "Kullanıcı bulunamadı" });
        }

        // Şifreyi doğrula
        const sifreDogruMu = await bcrypt.compare(sifre, kullanici.sifre);
        if (!sifreDogruMu) {
            return res.status(401).json({ message: "Yanlış şifre" });
        }

        // JWT token oluştur
        const token = jwt.sign({ id: kullanici._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Giriş başarılı olduğunda token ve mesaj gönder
        return res.status(200).json({
            message: "Giriş başarılı",
            token: token,
            kullaniciAdi: kullanici.kullaniciAdi
        });

    } catch (error) {
        console.error("Giriş hatası:", error);
        return res.status(500).json({ message: "Bir hata oluştu" , error: error.message});
    }
};

module.exports = { register, signin }; // Her iki fonksiyonu da dışarı aktarıyoruz
