import { Request, Response } from "express";

import { Province } from "../entity/Province";


export const getDeps = async (req: Request, res: Response) => {
  
    try {

        const { id } = req.body;
       
        const depts = await Province.find({ 
          where: { id_province: parseInt(id) },
          relations:['department']
        });
       
      return res.status(200).json(depts);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };