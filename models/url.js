import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const urlSchema = new Schema({
    originalUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    });


const Url = models.Url || model("Url", urlSchema);
export default Url;


