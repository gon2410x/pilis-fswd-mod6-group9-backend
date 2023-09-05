import { Request, Response } from "express";


import { Department } from "../entity/Department";


export const getLocation = async (req: Request, res: Response) => {
  
    try {

        const { id } = req.body;
       
        const loca = await Department.find({ 
          where: { id_department: parseInt(id) },
          relations:['location']
        });
       
      return res.status(200).json(loca);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };