"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _types_1 = require("#/@types");
const mongoose_1 = require("mongoose");
const electionSchema = new mongoose_1.Schema({
    electionName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: _types_1.status,
        required: true,
        default: "UPCOMING",
    },
    candidatesAsAssembly: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "CandidatesAsAssembly",
        },
    ],
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Election", electionSchema);
