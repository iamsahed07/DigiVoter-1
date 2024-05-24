import { requestCandidate } from "#/@types";
import { RequestHandler } from "express";
import Candidate from "#/models/candidate";
import CandidatesAsAssembly from "#/models/candidatesAsAssembly"


export const addCandidate: RequestHandler = async (
  req: requestCandidate,
  res
) => {
  try {
    const {
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
    } = req.body;
    const candidate = await Candidate.findOne({adhar})
    if(candidate) return res.status(500).json({ error: "Candidate already exists", success: false });
    const newCandidate = await Candidate.create({
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
    await newCandidate.save();

    const candidatesAsAssembly = await CandidatesAsAssembly.findOne({assembly})
    if(candidatesAsAssembly){
        candidatesAsAssembly.candidates.push(newCandidate._id);
        await candidatesAsAssembly.save()
    }else{
        const newCandidateAsAssembly = new CandidatesAsAssembly({ assembly });
        newCandidateAsAssembly.candidates.push(newCandidate._id);
        await newCandidateAsAssembly.save()
    }
    res.status(200).json({
      message: "Candidate added successfully",
      newCandidate,
      success: true,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message, success: false });
  }
};

export async function getAllCandidateBasedOnAssembly(req: any, res: any) {
  try {
    const { assembly } = req.body;
    const candidates = await Candidate.find({ assembly });
    const cadidateBasedAssembly = await CandidatesAsAssembly.findOne({ assembly });
    res.status(200).json({
      message: "Candidate successfully fetched",
      success: true,
      candidates,
      id: cadidateBasedAssembly?._id,
    });
  } catch (err: any) {
    res.status(500).json({ message: err.message, success: false });
  }
}
