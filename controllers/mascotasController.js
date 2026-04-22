import e from "express";
import { mascotas } from "../data.js";

export async function verMascotas(req, res)  {

    try {
        res.json(mascotas);

    } catch (error) {
        console.error("Error al obtener las mascotas:", error);
        res.status(500).json({ error: "Error al obtener las mascotas" });
    }

}

export async function verMascotaPorId(req, res) {

    try {
        const id = parseInt(req.params.id, 10);
        const mascota = mascotas.find((m) => m.id === id);

        return res.status(200).json(mascota);
    } catch (error) {
        console.error("Error al obtener la mascota por ID:", error);
        res.status(500).json({ error: "Error al obtener la mascota por ID" });
    }

}
    

export async function crearMascota(req, res) {

    try {
        const { nombre, tipo, raza, foto } = req.body;
        const nuevaMascota = {
            id: mascotas.length + 1,
            nombre,
            tipo,
            raza,
            foto: "",
        };

        mascotas.push(nuevaMascota);
        res.status(201).json(nuevaMascota);
    } catch (error) {
        console.error("Error al crear la mascota:", error);
        res.status(500).json({ error: "Error al crear la mascota" });
    }

}

export async function actualizarMascota(req, res) {

    try {
        const id = parseInt(req.params.id, 10);
        const { nombre, tipo, raza, foto } = req.body;
        const mascotaID = mascotas.find((m) => m.id === id);    

        const mascotaActualizada = {
            id,
            nombre,
            tipo,
            raza,
            foto: "",
        };

        mascotas[mascotaID] = mascotaActualizada;
        res.json(mascotaActualizada);
    } catch (error) {
        console.error("Error al actualizar la mascota:", error);
        res.status(500).json({ error: "Error al actualizar la mascota" });
    }
}

export async function eliminarMascota(req, res) {

    try {
        const id = parseInt(req.params.id, 10);
        const mascotaID = mascotas.find((m) => m.id === id);

        mascotas.splice(mascotaID, 1);
        res.status(204).send();
    } catch (error) {
        console.error("Error al eliminar la mascota:", error);
        res.status(500).json({ error: "Error al eliminar la mascota" });
    }
}

    
