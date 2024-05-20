import { Router } from "express";
import { validate } from "#/middleware/validator";
import { mustAuth } from "#/middleware/auth";
import { giveVote } from "#/controllars/vote";
const router = Router();
router.post("/give-vote", mustAuth, giveVote);

export default router;
