import { party, partyType, role } from "#/@types";
import { Model, Schema, model } from "mongoose";
import { UserDocument } from "./user";
import { Assembly, States } from "#/utils/assembly";
interface candidateDocument extends UserDocument {
  party: partyType;
}
const candidateSchema = new Schema<candidateDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    party: {
      type: String,
      enum: party,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      enum: States,
    },
    assembly: {
      type: String,
      required: true,
      enum: Assembly,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    adhar: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: role,
      default: "Candidate",
    },
    dob: {
      type: String,
      trim: true,
      required: true,
    },
    voterId: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      trim: true,
      required: true,
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("Candidate", candidateSchema) as Model<candidateDocument>;
