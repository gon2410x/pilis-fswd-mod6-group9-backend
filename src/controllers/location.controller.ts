import { Request, Response } from "express";


import { Department } from "../entity/Department";
import { Location } from "../entity/Location";


// <-- endpoint : return the locations of a department -->
export const getLocations = async (req: Request, res: Response) => {
  
  try {
    const { department } = req.body; 
    
    const locations = await Location.find( { where: { department: { department_name: department }} } )

    return res.status(200).json(locations);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};