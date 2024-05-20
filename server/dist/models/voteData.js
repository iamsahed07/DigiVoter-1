"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const voteSchema = new mongoose_1.Schema({
    candidateRef: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Candidate",
        required: true,
        unique: true
    },
    electionRef: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Election",
        required: true,
    },
    assemblyRef: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CandidatesAsAssembly",
        required: true,
    },
    votes: {
        type: Number,
        default: 0
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("VoteData", voteSchema);
