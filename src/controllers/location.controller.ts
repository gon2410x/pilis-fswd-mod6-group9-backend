import { Request, Response } from "express";


import { Department } from "../entity/Department";
import { Location } from "../entity/Location";


export const getLocation = async (req: Request, res: Response) => {
  
    try {       
        const loca = await Location.find({ 
          relations:['department']
        });       
      return res.status(200).json(loca);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

  export const createlocation = async (req: Request, res: Response) => {
    const { location_name, department } = req.body;
  
     const newLocation = new Location();
     newLocation.location_name = location_name ;
 
   try {
    const loca_exist = await Location.findOne({ 
      //select: { id_department: true },
      where: { location_name: location_name }
    });
    console.log("loca exist",loca_exist)
    if (loca_exist) return res.status(404).json({ message: "location already exists" });
      const depto_exist = await Department.findOne({ 
        select: { id_department: true },
        where: { id_department: parseInt(department.id_department) }
      });
  
    if (!depto_exist) return res.status(404).json({ message: "Not Department found" });
  
    newLocation.department = department;
  
     } catch(error) {
        if( error instanceof Error) {
          return res.status(500).json({ message: error.message});
        }
    }
    await newLocation.save();
    return res.status(200).json({ ok: "true", message: "the department was successfully created"});
  };


  export const updateLocation = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { department_name, location_name } = req.body;
      
    let update = {
      location_name: "",
     // province_name:"",
      
    }
  
    let loca = null;
  
    try {
      loca = await Location.findOneBy({ id_location: parseInt(id) });
  
      if (!loca) return res.status(404).json({ message: "Not location found" });    
  
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
    
    try {
      const depto_exist = await Department.find({ 
      //  select: { id_province: true },
        where: { department_name: department_name },
      });
        console.log("depto_exist",depto_exist);
      if (depto_exist.length == 0) return res.status(404).json({ message: "Not department found" });
  
    //  update.province_name = province_name;
  
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
      update.location_name =  location_name;
      await Location.update( { id_location: parseInt(id) }, update );
      return res.status(200).json({ ok: "true", message: "the location was successfully modified"});
  }
  
  export const deleteLocation = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    try {
      const loca = await Location.findOneBy({ id_location:  parseInt(id) });
    
      if (!loca) return res.status(404).json({ message: "Location not found" });
  
      await Location.delete({ id_location:  parseInt(id) });
  
      return res.status(200).json({ ok:"true", message:"the location was successfully removed"});
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
  }