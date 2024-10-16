require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const authRoutes = require('./routes/auth');

// Uygulamayı oluştur
const app = express();
app.use(express.json());

// Ortam değişkenlerinden PORT ve DB_HOST değerlerini al
const PORT = process.env.PORT  // PORT tanımlı değilse varsayılan 1453 kullanılacak
const MONGO_URI = process.env.DB_HOST ;  // Yerel MongoDB için varsayılan URI

// Kitap router'ı dahil et
const kitapRoute = require('./routes/kitap');
const kullaniciRoute = require('./routes/kullanici');
const functionsRoute = require('./routes/functions')


// JSON verilerini parse etmek için middleware


// Kitap rotalarını kullan
app.use("/kitap", kitapRoute);
app.use("/kullanici",kullaniciRoute);
app.use("/function",functionsRoute);
app.use('/api/auth', authRoutes);

app.use(express.static(path.join(__dirname, 'front-end')));




// MongoDB bağlantısını kur
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

// Sunucuyu dinlemeye başla
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Başarıyla sunucu çalıştı
});
