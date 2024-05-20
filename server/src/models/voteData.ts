
import { Model, ObjectId, Schema, model } from "mongoose";
interface voteDocument {
  candidateRef: ObjectId;
  electionRef:ObjectId;
  assemblyRef:ObjectId;
  votes:number;
}
const voteSchema = new Schema<voteDocument>(
  {
    candidateRef: {
      type: Schema.Types.ObjectId,
      ref: "Candidate",
      required: true,
      unique:true
    },
    electionRef: {
      type: Schema.Types.ObjectId,
      ref: "Election",
      required: true,
    },
    assemblyRef: {
      type: Schema.Types.ObjectId,
      ref: "CandidatesAsAssembly",
      required: true,
    },
    votes:{
        type:Number,
        default:0
    }
  },
  { timestamps: true }
);

export default model("VoteData", voteSchema) as Model<voteDocument>;
