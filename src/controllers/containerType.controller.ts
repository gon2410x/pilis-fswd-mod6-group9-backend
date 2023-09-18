import { Request, Response } from "express";

import { Container_type } from "../entity/Container_type";


// <-- endpoint to get container types -->
export const getContainertypes = async (req: Request, res: Response) => {

  try {
    const container_types = await Container_type.find();

    return res.status(200).json(container_types);
  } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
  }
  };