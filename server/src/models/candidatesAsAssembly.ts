import { Assembly, States, statesTypes } from "#/utils/assembly";
import { Model, ObjectId, Schema, model } from "mongoose";
export interface candidatesAsAssemblyDocument {
  _id: ObjectId;
  assembly: statesTypes;
  candidates: ObjectId[];
}
const candidatesAsAssemblySchema = new Schema<candidatesAsAssemblyDocument>(
  {
    assembly: {
      type: String,
      required: true,
      enum: Assembly,
      unique: true,
    },
    candidates: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Candidate",
        },
      ],
    },
  },
  { timestamps: true }
);

export default model(
  "CandidatesAsAssembly",
  candidatesAsAssemblySchema
) as Model<candidatesAsAssemblyDocument>; //location wise Candidates
