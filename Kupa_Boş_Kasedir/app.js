require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Uygulamayı oluştur
const app = express();

// Ortam değişkenlerinden PORT ve DB_HOST değerlerini al
const PORT = process.env.PORT || 1453;  // PORT tanımlı değilse varsayılan 1453 kullanılacak
const MONGO_URI = process.env.DB_HOST || 'mongodb://localhost:27017/myapp';  // Yerel MongoDB için varsayılan URI

// Kitap router'ı dahil et
const kitapRoute = require('./routes/kitap');

// JSON verilerini parse etmek için middleware
app.use(express.json());

// Kitap rotalarını kullan
app.use("/kitap", kitapRoute);

// Statik dosya servis etmek için (gerekliyse)
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB bağlantısını kur
mongoose.connect(MONGO_URI, {
   
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

// Sunucuyu dinlemeye başla
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Başarıyla sunucu çalıştı
});
