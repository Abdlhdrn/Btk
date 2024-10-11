const Kullanici = require("../models/kullanici");

const getAllKullanici = async () => {
    const Kullanicilar = await Kullanici.find();
    return Kullanicilar;
};

const getByIdKullanici = async (id) => {
    const Kullanici = await Kullanici.findById(id);
    return Kullanici;
};

const updateKullaniciById = async (req) => {
    const { id } = req.params;  // `id`'yi `req.params`'den alıyoruz
    const { adi,soyadi,tc,dogum_tarihi,aktiflik,şehir,dili } = req.body;

    const updatedKullanici = await Kullanici.findByIdAndUpdate(id, {
        adi,soyadi,tc,dogum_tarihi,aktiflik,şehir,dili
    }, { new: true });

    return updatedKullanici; // Güncellenmiş Kullanici döndürülüyor
};

const createNewKullanici = async (req) => {
    const { adi,soyadi,tc,dogum_tarihi,aktiflik,şehir,dili } = req.body;

    const yeniKullanici = await Kullanici.create({
        adi,soyadi,tc,dogum_tarihi,aktiflik,şehir,dili
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

const kitapSatinAl = async (req,res,next)=> {
    if (kullanici.bakiye >= fiyati) {
      kullanici.bakiye -= fiyati;  
      console.log(`Kitap satın alındı Kalan bakiye: ${kullanici.bakiye} TL`);
    } 
    else {
      console.log('Yetersiz bakiye');
    }
  } 
  