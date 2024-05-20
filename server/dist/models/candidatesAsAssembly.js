"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assembly_1 = require("#/utils/assembly");
const mongoose_1 = require("mongoose");
const candidatesAsAssemblySchema = new mongoose_1.Schema({
    assembly: {
        type: String,
        required: true,
        enum: assembly_1.Assembly,
        unique: true,
    },
    candidates: {
        type: [
            {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "Candidate",
            },
        ],
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("CandidatesAsAssembly", candidatesAsAssemblySchema);
