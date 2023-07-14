import Turio from "../../../db/models/Turio";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const turios = await Turio.find();
    return response.status(200).json(turios);
  } else if (request.method === "POST") {
    try {
      const turioData = request.body;
      const turio = new Turio(turioData);
      await turio.save();
      response.status(201).json({ status: "Tour created" });
    } catch (error) {
      console.log(error);
      response.status(400).jason({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Not Found" });
  }
}
