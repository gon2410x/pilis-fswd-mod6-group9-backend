import { Request, Response } from "express";
import { Province } from "../entity/Province";


// <-- endpoint : return the pronvinces -->
export const getProv = async (req: Request, res: Response) => {
  
    try {
      const provs = await Province.find();
  
      return res.json(provs);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

export const getProvince = async (req: Request, res: Response) => {
  
  try {
    const { id } = req.params;

    const prov = await Province.findOne({ 
      where: { id_province: parseInt(id) },
    });
    

  
    if (!prov) return res.status(404).json({ message: "Province not found" });
  
    return res.json(prov);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
