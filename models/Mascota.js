import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
        tipo: {
            type: String,
            required: true,
            trim: true,
        },
        raza: {
            type: String,
            required: true,
            trim: true,
        },
        foto: {
            type: String,
            default: "",
        },
    },
);

const Mascota = mongoose.model("Mascota", mascotaSchema);

export default Mascota;
