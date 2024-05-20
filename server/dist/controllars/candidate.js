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
exports.getAllCandidateBasedOnAssembly = exports.addCandidate = void 0;
const candidate_1 = __importDefault(require("#/models/candidate"));
const candidatesAsAssembly_1 = __importDefault(require("#/models/candidatesAsAssembly"));
const addCandidate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, party, assembly, email, adhar, state, dob, voterId, mobile, address, } = req.body;
        const candidate = yield candidate_1.default.findOne({ adhar });
        if (candidate)
            return res.status(500).json({ error: "Candidate already exists", success: false });
        const newCandidate = yield candidate_1.default.create({
            name,
            party,
            assembly,
            email,
            adhar,
            state,
            dob,
            voterId,
            mobile,
            address,
        });
        yield newCandidate.save();
        const candidatesAsAssembly = yield candidatesAsAssembly_1.default.findOne({ assembly });
        if (candidatesAsAssembly) {
            candidatesAsAssembly.candidates.push(newCandidate._id);
        }
        else {
            const newCandidateAsAssembly = new candidatesAsAssembly_1.default({ assembly });
            newCandidateAsAssembly.candidates.push(newCandidate._id);
            yield newCandidateAsAssembly.save();
        }
        res.status(200).json({
            message: "Candidate added successfully",
            newCandidate,
            success: true,
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message, success: false });
    }
});
exports.addCandidate = addCandidate;
function getAllCandidateBasedOnAssembly(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { assembly } = req.body;
            const candidates = yield candidate_1.default.find({ assembly });
            res.status(200).json({
                message: "Candidate successfully fetched",
                success: true,
                candidates,
            });
        }
        catch (err) {
            res.status(500).json({ message: err.message, success: false });
        }
    });
}
exports.getAllCandidateBasedOnAssembly = getAllCandidateBasedOnAssembly;
