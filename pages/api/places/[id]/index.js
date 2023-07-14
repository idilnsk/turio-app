//import { places } from '../../../../lib/db.js';
import dbConnect from "../../../../db/connect";
import Turio from "../../../../db/models/Turio";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  
if (id==="undefined"){
return response.status(404).json({status:"not loaded"});
}

  if (request.method === "GET") {
    const turio = await Turio.findById(id);
    if (!turio) {
      return response.status(404).json({ status: "not found" });
    }
    response.status(200).json(turio);
  } else if (request.method === "PATCH") {
    const placesToUpdate = await Turio.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json(placesToUpdate);
  } else if (request.method === "DELETE") {
    const placesToDelete = await Turio.findByIdAndDelete(id);
    response.status(200).json(placesToDelete);
  } else {
    return response.status(405).json({ message: "Not allowed" });
  }
}
