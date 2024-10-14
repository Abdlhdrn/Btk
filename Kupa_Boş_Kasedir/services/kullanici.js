const Kullanici = require("../models/kullanici");

const getAllKullanici = async () => {
    
    const Kullanicilar = await Kullanici.find();
    return Kullanicilar;
};

const getByIdKullanici = async (id) => {
    const kullanici = await Kullanici.findById(id);
    return kullanici;
};

const updateKullaniciById = async (id, body) => {
    const { adi,soyadi,tc,dogum_tarihi,aktiflik,sehir,bakiye } = body;  // Bakiye ve diğer parametreler body'den alınır

    const updatedKullanici = await Kullanici.findByIdAndUpdate(id, {
        adi,soyadi,tc,dogum_tarihi,aktiflik,sehir,bakiye
    }, { new: true });

    return updatedKullanici;  // Güncellenmiş Kullanıcı döndürülür
};

const createNewKullanici = async (req) => {
    const { adi,soyadi,tc,dogum_tarihi,aktiflik,sehir,bakiye } = req.body;

    const yeniKullanici = await Kullanici.create({
        adi,soyadi,tc,dogum_tarihi,aktiflik,sehir,bakiye
    });

    return yeniKullanici; // Yeni oluşturulan Kullanici döndürülüyor
};

const deleteKullaniciById = async (req) => {
    const { id } = req.params;  // `id`'yi `req.params`'den alıyoruz
    const silinenKullanici = await Kullanici.findByIdAndDelete(id);

    return silinenKullanici; // Silinen Kullanici geri döndürülüyor
};

module.exports = {
    getByIdKullanici,
    getAllKullanici,
    updateKullaniciById,
    createNewKullanici,
    deleteKullaniciById
};

