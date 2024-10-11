const Kitap = require("../models/kitap");

const getAllKitap = async () => {
    const kitaplar = await Kitap.find();
    return kitaplar;
};

const getByIdKitap = async (id) => {
    const kitap = await Kitap.findById(id);
    return kitap;
};

const updateKitapById = async (id, body) => {
    const { adi, yazari, turu, baski, sayfa_sayisi, fiyati, stok_durumu, dili } = body;

    const updatedKitap = await Kitap.findByIdAndUpdate(id, {
        adi, yazari, turu, baski, sayfa_sayisi, fiyati, stok_durumu, dili
    }, { new: true });

    return updatedKitap; // Güncellenmiş kitap döndürülüyor
};

const createNewKitap = async (body) => {
    const { adi, yazari, turu, baski, sayfa_sayisi, fiyati, stok_durumu, dili } = body;

    const yeniKitap = await Kitap.create({
        adi, yazari, turu, baski, sayfa_sayisi, fiyati, stok_durumu, dili
    });

    return yeniKitap; // Yeni oluşturulan kitap döndürülüyor
};

const deleteKitapById = async (id) => {
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
