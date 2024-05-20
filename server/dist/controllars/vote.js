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
exports.giveVote = void 0;
const voteData_1 = __importDefault(require("#/models/voteData"));
const givenVote_1 = __importDefault(require("#/models/givenVote"));
const giveVote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.user;
        const { candidateId, electionId, candidatesAsAssemblyId } = req.body;
        const isVoted = yield givenVote_1.default.findOne({ voterRef: id });
        if (isVoted) {
            return res
                .status(400)
                .json({ error: "Vote is already given by the voter!!", success: false });
        }
        const voteData = yield voteData_1.default.findOne({ candidateRef: candidateId });
        let newGivenVote;
        if (voteData) {
            voteData.votes += 1;
            yield voteData.save();
            newGivenVote = yield givenVote_1.default.create({
                voteRef: voteData._id,
                voterRef: id,
            });
        }
        else {
            const newVote = yield voteData_1.default.create({
                candidateRef: candidateId,
                electionRef: electionId,
                assemblyRef: candidatesAsAssemblyId,
            });
            newVote.votes += 1;
            yield newVote.save();
            newGivenVote = yield givenVote_1.default.create({
                voteRef: newVote._id,
                voterRef: id,
            });
        }
        res
            .status(200)
            .json({ message: "vote has been given sucessfully!!", success: true });
    }
    catch (err) {
        res.status(400).json({ message: err.message, success: false });
    }
});
exports.giveVote = giveVote;
