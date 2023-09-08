import { Request, Response } from "express";


import { Department } from "../entity/Department";
import { Location } from "../entity/Location";


export const getLocation = async (req: Request, res: Response) => {
  
    try {

  //      const { id } = req.body;
       
        const loca = await Location.find({ 
 //         where: { id_department: parseInt(id) },
          relations:['container','organization','department']
        });
       
      return res.status(200).json(loca);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };