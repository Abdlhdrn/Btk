const Kitap = require("../models/kitap");


const getAllKitap = async () => {
    const Kitapler = await Kitap.find();
    return Kitapler;
};

const getByIdKitap = async (id) => {
    const kitap = await Kitap.findById(id);
    return kitap;
};

const updateKitapById = async (req) => {
    const { id } = req.params;
    const { adi, yazari, turu, baski, sayfa_sayisi, fiyati, stok_durumu, dili } = req.body;

    const updatedKitap = await Kitap.findByIdAndUpdate(id, {
        adi, yazari, turu, baski, sayfa_sayisi, fiyati, stok_durumu, dili
    }, { new: true });

    return updatedKitap; // body yerine güncellenen kitap döndürülüyor
};

const createNewKitap = async (req) => {
    const { adi, yazari, turu, baski, sayfa_sayisi, fiyati, stok_durumu, dili } = req.body;
    
    const yeniKitap = await Kitap.create({
        adi, yazari, turu, baski, sayfa_sayisi, fiyati, stok_durumu, dili
    });

    return yeniKitap; // Kitap oluşturulunca geri dönüldü
};

const deleteKitapById = async (req) => {
    const { id } = req.params;
    const silinenKitap = await Kitap.findByIdAndDelete(id);

    return silinenKitap; // Silinen kitap geri döndürüldü
};

module.exports = {
    getByIdKitap,
    getAllKitap,
    updateKitapById,
    createNewKitap,
    deleteKitapById
};
