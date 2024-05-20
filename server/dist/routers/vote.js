"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("#/middleware/auth");
const vote_1 = require("#/controllars/vote");
const router = (0, express_1.Router)();
router.post("/give-vote", auth_1.mustAuth, vote_1.giveVote);
exports.default = router;
