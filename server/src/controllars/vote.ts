import { Response } from "express";
import VoteData from '#/models/voteData';
import GivenVote from '#/models/givenVote'
import { GiveVote } from "#/@types";
export const giveVote = async (req: GiveVote, res: Response) => {
  try {
    const { id } = req.user;
    const { candidateId, electionId, candidatesAsAssemblyId } = req.body;

    const isVoted = await GivenVote.findOne({ voterRef: id });
    if (isVoted) {
      return res
        .status(400)
        .json({ error: "Vote is already given by the voter!!", success: false });
    }

    const voteData = await VoteData.findOne({ candidateRef: candidateId });
    let newGivenVote;
    if (voteData) {
      voteData.votes += 1;
      await voteData.save();
      newGivenVote = await GivenVote.create({
        voteRef: voteData._id,
        voterRef: id,
      });
    } else {
      const newVote = await VoteData.create({
        candidateRef: candidateId,
        electionRef: electionId,
        assemblyRef: candidatesAsAssemblyId,
      });
      newVote.votes += 1;
      await newVote.save();
      newGivenVote = await GivenVote.create({
        voteRef: newVote._id,
        voterRef: id,
      });
    }
    res
      .status(200)
      .json({ message: "vote has been given sucessfully!!", success: true });
  } catch (err: any) {
    res.status(400).json({ message: err.message, success: false });
  }
};
