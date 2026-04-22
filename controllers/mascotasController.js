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
    