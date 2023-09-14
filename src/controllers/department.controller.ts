import { Request, Response } from "express";

import { Province } from "../entity/Province";
import { Department } from "../entity/Department";


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


  export const createDepto = async (req: Request, res: Response) => {
    const {  department_name,province } = req.body;
  
     const newDepto = new Department();
     newDepto.department_name = department_name ;
 
   try {
      const province_exist = await Province.findOne({ 
        select: { id_province: true },
        where: { id_province: parseInt(province.id_province) }
      });
  
    if (!province_exist) return res.status(404).json({ message: "Not Province found" });
  
    newDepto.province = province;
  
     } catch(error) {
        if( error instanceof Error) {
          return res.status(500).json({ message: error.message});
        }
    }
    await newDepto.save();
    return res.status(200).json({ ok: "true", message: "the department was successfully created"});
  };
  
  export const updateDepartment = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { department_name, 
            province_name,
           
          } = req.body;
      
    let update = {
      department_name: "",
     // province_name:"",
      
    }
  
    let dept = null;
  
    try {
      dept = await Department.findOneBy({ id_department: parseInt(id) });
  
      if (!dept) return res.status(404).json({ message: "Not department found" });

    //  return res.status(200).json({ ok: "true", message: "the department was successfully modified"}); 
  
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
    
    try {
      const prov_exist = await Province.find({ 
      //  select: { id_province: true },
        where: { province_name: province_name },
      });
        console.log("prov_exist",prov_exist);
      if (prov_exist.length == 0) return res.status(404).json({ message: "Not Province found" });
  
    //  update.province_name = province_name;
  
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
      update.department_name =  department_name;
      await Department.update( { id_department: parseInt(id) }, update );
      return res.status(200).json({ ok: "true", message: "the department was successfully modified"});
  }


  export const deleteDepartment = async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log(id)
    try {
      const depto = await Department.findOneBy({ id_department:  parseInt(id) });
    console.log(depto);
      if (!depto) return res.status(404).json({ message: "Department not found" });
  
      await Department.delete({ id_department:  parseInt(id) });
  
      return res.status(200).json({ ok:"true", message:"the department was successfully removed"});
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
  }