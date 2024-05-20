"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _types_1 = require("#/@types");
const assembly_1 = require("#/utils/assembly");
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    state: {
        type: String,
        required: true,
        enum: assembly_1.States,
    },
    assembly: {
        type: String,
        required: true,
        enum: assembly_1.Assembly,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    adhar: {
        type: String,
        required: true,
        unique: true,
    },
    tokens: [String],
    role: {
        type: String,
        enum: _types_1.role,
        default: "Voter",
    },
    dob: {
        type: String,
        trim: true,
        required: true,
    },
    voterId: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        trim: true,
        required: true,
    },
    address: {
        type: String,
        trim: true,
        required: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("User", userSchema);
