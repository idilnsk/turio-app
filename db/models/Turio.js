import mongoose from "mongoose";
const { Schema } = mongoose;
const turioSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  mapURL: { type: String, required: true },
  description: { type: String, required: true },
});
const Turio = mongoose.models.Turio || mongoose.model("Turio", turioSchema);
export default Turio;
