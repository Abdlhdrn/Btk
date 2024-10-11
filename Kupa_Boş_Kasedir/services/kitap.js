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

    const updatedKitap = await Kitap.findByIdAndUpdate(id, 
        {
        adi, yazari, turu, baski, sayfa_sayisi, fiyati, stok_durumu, dili
    }, { new: true });

    return updatedKitap; // Güncellenmiş kitap döndürülüyor
};



const createNewKitap = async (body) => {
    try {
        // Verilen kitap verilerini kullanarak yeni kitap oluşturma işlemi
        const yeniKitap = await Kitap.create(body);

        return yeniKitap; // Başarıyla oluşturulan kitap döndürülür
    } catch (error) {
        // Eğer hata oluşursa, hatayı fırlatır
        throw new Error('Kitap oluşturulurken bir hata oluştu: ' + error.message);
    }
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
