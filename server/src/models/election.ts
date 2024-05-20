import { statusType, status } from "#/@types";
import { Model, ObjectId, Schema, model } from "mongoose";
interface electionDocument {
  id: ObjectId;
  electionName: string;
  status: statusType;
  candidatesAsAssembly: ObjectId[];
}
const electionSchema = new Schema<electionDocument>(
  {
    electionName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: status,
      required: true,
      default: "UPCOMING",
    },
    candidatesAsAssembly: [
      {
        type: Schema.Types.ObjectId,
        ref: "CandidatesAsAssembly",
      },
    ],
  },
  { timestamps: true }
);

export default model("Election", electionSchema) as Model<electionDocument>;
