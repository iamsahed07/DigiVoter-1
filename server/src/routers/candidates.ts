import { addCandidate, getAllCandidateBasedOnAssembly } from "#/controllars/candidate";
import { mustAuth } from "#/middleware/auth";
import { validate } from "#/middleware/validator";
import { CandidateValidation } from "#/utils/validationSchema";
import { Router } from "express";

const router = Router();
router.post("/add-candidate",validate(CandidateValidation), addCandidate); //on admin can add
router.patch("/get-based-on-assembly", getAllCandidateBasedOnAssembly)
export default router;