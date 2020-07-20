const mongoose = require("mongoose")

const Schema = mongoose.Schema

const FeriadoSchema = Schema({    
    "id": { type: [String], index: true },
    "dia":Number,
    "mes":String,
    "nroMes":Number,
    "motivo":String,
    "tipo":String,
    "original":String,
    "opcional":String,
    "religion":String,
    "info":String,
})

module.exports = mongoose.model('Feriado', FeriadoSchema);
