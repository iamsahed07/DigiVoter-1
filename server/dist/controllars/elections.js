"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllElections = exports.createElection = void 0;
const election_1 = __importDefault(require("#/models/election"));
const createElection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { electionName, status, candidatesAsAssembly } = req.body;
        const election = new election_1.default({ electionName, status, candidatesAsAssembly });
        yield election.save();
        res
            .status(200)
            .json({
            message: "Election successfully created",
            election,
            success: true,
        });
    }
    catch (err) {
        res.status(400).json({ error: err.message, success: false });
    }
});
exports.createElection = createElection;
const getAllElections = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const elections = yield election_1.default.find({});
        res
            .status(200)
            .json({
            message: "All elections fetched successfully.",
            elections,
            success: true,
        });
    }
    catch (err) {
        res.status(500).json({ message: err.message, success: false });
    }
});
exports.getAllElections = getAllElections;
