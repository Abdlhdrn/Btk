//npm install jsonwebtoken

const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'sizin-gizli-anahtarınız';

// Middleware
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(401);
    
    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Korunan bir rota
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Bu korunan bir alan.', user: req.user });
});

