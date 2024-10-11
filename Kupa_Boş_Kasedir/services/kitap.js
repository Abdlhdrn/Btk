const Kitap = require("../models/kitap");

const getAllKitap = async () => {
    const kitaplar = await Kitap.find();
    return kitaplar;
};

const getByIdKitap = async (id) => {
    const kitap = await Kitap.findById(id);
    return kitap;
};

const updateKitapById = async (req) => {
    const { id } = req.params;  // `id`'yi `req.params`'den alıyoruz
    const { adi, yazari, turu, baski, sayfa_sayisi, fiyati, stok_durumu, dili } = req.body;

    const updatedKitap = await Kitap.findByIdAndUpdate(id, {
        adi, yazari, turu, baski, sayfa_sayisi, fiyati, stok_durumu, dili
    }, { new: true });

    return updatedKitap; // Güncellenmiş kitap döndürülüyor
};

const createNewKitap = async (req) => {
    const { adi, yazari, turu, baski, sayfa_sayisi, fiyati, stok_durumu, dili } = req.body;

    const yeniKitap = await Kitap.create({
        adi, yazari, turu, baski, sayfa_sayisi, fiyati, stok_durumu, dili
    });

    return yeniKitap; // Yeni oluşturulan kitap döndürülüyor
};

const deleteKitapById = async (req) => {
    const { id } = req.params;  // `id`'yi `req.params`'den alıyoruz
    const silinenKitap = await Kitap.findByIdAndDelete(id);

    return silinenKitap; // Silinen kitap geri döndürülüyor
};

module.exports = {
    getByIdKitap,
    getAllKitap,
    updateKitapById,
    createNewKitap,
    deleteKitapById
};
