require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Uygulamayı oluştur
const app = express();

// Ortam değişkenlerinden PORT ve DB_HOST değerlerini al
const PORT = process.env.PORT;  // Eğer .env dosyasında PORT yoksa 1453'ü kullan
const MONGO_URI = process.env.DB_HOST

// JSON gövdesini parse etmek için middleware'i ayarla
app.use(express.json());





// MongoDB bağlantısını kur
mongoose.connect(MONGO_URI, {

}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});







// Sunucuyu dinlemeye başla
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Şu anda template literal kullandık

});
