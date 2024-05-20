"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const elections_1 = require("#/controllars/elections");
const validator_1 = require("#/middleware/validator");
const validationSchema_1 = require("#/utils/validationSchema");
const router = express_1.default.Router();
router.post('/create', (0, validator_1.validate)(validationSchema_1.ElectionValidation), elections_1.createElection);
router.get('/get-all', elections_1.getAllElections);
exports.default = router;
