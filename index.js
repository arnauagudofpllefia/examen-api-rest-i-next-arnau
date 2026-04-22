import dotenv from 'dotenv';
import express from 'express';
import rutaMascotas from './routes/rutaMascotas.js';


dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('API REST de mascotas');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
    
});

app.use('/api/mascotas', rutaMascotas);