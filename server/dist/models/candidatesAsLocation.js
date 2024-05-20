"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const locations_1 = require("../utils/locations");
const mongoose_1 = require("mongoose");
const candidatesSchema = new mongoose_1.Schema({
    location: {
        type: String,
        required: true,
        enum: locations_1.locations,
        unique: true,
    },
    candidates: {
        type: [{
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Candidate'
            }],
        required: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("CandidatesAL", candidatesSchema);
