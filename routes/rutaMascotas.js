import express from 'express'
import { verMascotas, verMascotaPorId, crearMascota, actualizarMascota, eliminarMascota } from '../controllers/mascotasController.js'


const router = express.Router()

router.get('/', verMascotas)
router.get('/:id', verMascotaPorId)
router.post('/', crearMascota)
router.put('/:id', actualizarMascota)
router.delete('/:id', eliminarMascota)

export default router
