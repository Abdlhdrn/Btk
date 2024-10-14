const { newKitapSatinAl } = require('../services/functions');

const satinAl = async (req, res, next) => {
    try {
        await newKitapSatinAl(req, res);  // Burada başka bir yanıt gerekmez
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    satinAl
};
