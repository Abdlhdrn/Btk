const { getAllKitap, getByIdKitap, updateKitapById, createNewKitap, deleteKitapById } = require("../services/kitap");

const fetchAllKitap = async (req, res, next) => {
    try {
        const kitaplar = await getAllKitap();
        return res.status(200).json(kitaplar);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const fetchKitapById = async (req, res, next) => {
    try {
        const { id } = req.params;  // `id` parametresi alınır
        const kitap = await getByIdKitap(id);
        if (!kitap) {
            return res.status(404).json({ message: "Kitap bulunamadı" });
        }
        return res.status(200).json(kitap);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateKitap = async (req, res, next) => {
    try {
        const { id } = req.params;  // `id` parametresi alınır
        const guncelKitap = await updateKitapById(req);  // `req` parametresini gönder
        if (!guncelKitap) {
            return res.status(404).json({ message: "Kitap bulunamadı" });
        }
        return res.status(200).json(guncelKitap);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const createKitap = async (req, res, next) => {
    try {
        const yeniKitap = await createNewKitap(req);  // `req` parametresini gönder
        return res.status(201).json(yeniKitap);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const deleteKitap = async (req, res, next) => {
    try {
        const { id } = req.params; // URL'den gelen ID'yi alıyoruz
        
        const silinenKitap = await deleteKitapById(req); // Kitap servisini çağırıyoruz
        
        if (!silinenKitap) {
            return res.status(404).json({ message: "Kitap bulunamadı" }); // Kitap bulunamazsa 404
        }

        return res.status(200).json({ message: "Kitap başarıyla silindi", kitap: silinenKitap }); // Başarıyla silindiğinde 200
    } catch (error) {
        return res.status(500).json({ error: error.message }); // Hata durumunda 500
    }
};

module.exports = {
    fetchAllKitap,
    updateKitap,
    fetchKitapById,
    createKitap,
    deleteKitap
};
