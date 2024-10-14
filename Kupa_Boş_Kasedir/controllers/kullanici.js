const { getAllKullanici, getByIdKullanici, updateKullaniciById, createNewKullanici, deleteKullaniciById } = require("../services/kullanici");

const fetchAllKullanici = async (req, res, next) => {
    try {
        const Kullanicilar = await getAllKullanici();
        return res.status(200).json(Kullanicilar);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const fetchKullaniciById = async (req, res, next) => {
    try {
        const { id } = req.params;  // `id` parametresi alınır
        const Kullanici = await getByIdKullanici(id);
        if (!Kullanici) {
            return res.status(404).json({ message: "Kullanici bulunamadi" });
        }
        return res.status(200).json(Kullanici);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateKullanici = async (req, res, next) => {
    try {
         // `id` parametresi alınır
        const guncelKullanici = await updateKullaniciById(req);  // `req` parametresini gönder
        if (!guncelKullanici) {
            return res.status(404).json({ message: "Kullanici bulunamadi" });
        }
        return res.status(200).json(guncelKullanici);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const createKullanici = async (req, res, next) => {
    try {
        const yeniKullanici = await createNewKullanici(req);  // `req` parametresini gönder
        return res.status(201).json(yeniKullanici);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const deleteKullanici = async (req, res, next) => {
    try {
        const { id } = req.params; // URL'den gelen ID'yi alıyoruz
        
        const silinenKullanici = await deleteKullaniciById(req); // Kullanici servisini çağırıyoruz
        
        if (!silinenKullanici) {
            return res.status(404).json({ message: "Kullanici bulunamadi" }); // Kullanici bulunamazsa 404
        }

        return res.status(200).json({ message: "Kullanici başariyla silindi", Kullanici: silinenKullanici }); // Başarıyla silindiğinde 200
    } catch (error) {
        return res.status(500).json({ error: error.message }); // Hata durumunda 500
    }
};




module.exports = {
    fetchAllKullanici,
    updateKullanici,
    fetchKullaniciById,
    createKullanici,
    deleteKullanici
};
