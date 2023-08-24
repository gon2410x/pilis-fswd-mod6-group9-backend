import { Request, Response } from "express";
import {  Location } from "../entity/Location";
// import {  Department } from "../entity/Department";


import jwt from "jsonwebtoken";
import { Department } from "../entity/Department";
import { Organization } from "../entity/Organization";
import { Container_type } from "../entity/Container_type";
import { Container } from "../entity/Container";
import { User } from "../entity/User";
import { Rol } from "../entity/Rol";
import { Province } from "../entity/Province";
const jwtSecret = 'somesecrettoken';
const jwtRefreshTokenSecret = 'somesecrettokenrefresh';
let refreshTokens: (string | undefined)[] = [];


export const getContainers = async (req: Request, res: Response) => {
   
    const { province, department, location, residuo } = req.body;

    console.log(`provincia: ${province} , departamento: ${department} , localidad: ${location} , residuo: ${residuo}`);

    try {

    // const container = await Location.find({ 
    //     relations: { department: { provice: true} },  
    //     where: { department: { department_name: department, provice: { province_name: province}} , },
    // });

    // const container = await Container.find( {relations: { organization:true, container_type:true}} );

    // const container = await Container.find({ relations: { organization:true, container_type: true, province: true}} );

    // const container = await Container.find({relations:{location:{department:{province:true}}}});

      const container = await Container.find({ 
      relations: { container_type: true, organization: true, location: { department: { province: true } } },  
      where: { location: { location_name: location, 
                           department: { department_name: department,
                                         province: { province_name: province }}}, 
               container_type: { residuo: residuo } },
      });

      return res.status(200).json(container);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };