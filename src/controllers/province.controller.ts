import { Request, Response } from "express";
import { Province } from "../entity/Province";
import { Department } from "../entity/Department";



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

export const createProvince = async (req: Request, res: Response) => {

   const {  province_name } = req.body;

   const prov = new Province();

   try {
        const prov_exist = await Province.find({ 
          //  select: { id_province: true },
            where: { province_name: province_name },
        });
        console.log("prov_exist",prov_exist);
        if (prov_exist.length > 0) return res.status(404).json({ message: "provinica already exists" });        
        prov.province_name = province_name ;      

   } catch(error) {
        if( error instanceof Error) {
            return res.status(500).json({ message: error.message});
        }
     }
    await prov.save();
    return res.status(200).json({ ok: "true", message: "the province was successfully create"});
};


export const updateProvince = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { province_name } = req.body;  
       
    
  let update = {    
   province_name:""    
  }

  let prov = null;

  try {
    prov = await Province.findOneBy({ id_province: parseInt(id) });

    if (!prov) return res.status(404).json({ message: "Not province found" });

  } catch (error) {
      if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
      }
  }
  
  
    update.province_name =  province_name;
    await Province.update( { id_province: parseInt(id) }, update );
    return res.status(200).json({ ok: "true", message: "the province was successfully modified"});
}


export const deleteProvince = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    const prov = await Province.findOneBy({ id_province:  parseInt(id) });
    
    if (!prov) return res.status(404).json({ message: "Province not found" });

    await Province.delete({ id_province:  parseInt(id) });

    return res.status(200).json({ ok:"true", message:"the province was successfully removed"});
  } catch (error) {
      if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
      }
  }
}
  

