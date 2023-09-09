import { Request, Response } from "express";

import { Department } from "../entity/Department";


// <-- endpoint : return the departments of a province -->
export const getDepartments = async (req: Request, res: Response) => {
  
  try {
    const { province } = req.body;

    const departments = await Department.find({ where: { province: { province_name: province}} });
       
    return res.status(200).json(departments);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};