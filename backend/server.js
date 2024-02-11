const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3001;

// Middleware pour parser les corps de requêtes JSON
app.use(express.json());

// Configuration de CORS pour autoriser les requêtes de votre domaine frontend
app.use(cors({
    origin: 'http://localhost:3000', // Ajustez si nécessaire
}));

// Configuration de Nodemailer pour utiliser Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, 
    },
});

// Route pour gérer les envois de formulaire
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email, // L'email de l'expéditeur basé sur le formulaire
        to: 'max.onceuponadev@gmail.com', // Votre adresse email cible
        subject: `Nouveau message de ${name}`,
        text: `Message de ${name} (${email}): ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
            return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
        }
        console.log('Email envoyé: ' + info.response);
        res.status(200).json({ message: 'Email envoyé avec succès' });
    });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
