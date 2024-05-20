import express from "express";
import { getAllElections,createElection } from "#/controllars/elections";
import { validate } from "#/middleware/validator";
import { ElectionValidation } from "#/utils/validationSchema";
const router = express.Router();

router.post('/create',validate(ElectionValidation), createElection)
router.get('/get-all', getAllElections)

export default router;