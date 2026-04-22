import express from 'express';
import { verMascotas, verMascotaPorId } from '../controllers/mascotasController.js';


const router = express.Router();

router.get('/', verMascotas);
router.get('/:id', verMascotaPorId);


export default router;
