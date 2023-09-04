import { Request, Response } from "express";
import {  Location } from "../entity/Location";

import { Container_type } from "../entity/Container_type";
import { Container } from "../entity/Container";
import { Organization } from "../entity/Organization";


// <-- endpoint to get containers -->
export const getContainers = async (req: Request, res: Response) => {
   
  const { province, department, location, residuo } = req.body;

  try {

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


// <-- endpoint to create container -->
export const createContainer = async (req: Request, res: Response) => {
   
  const { longitude, 
          latitude, 
          street_description,
          province, 
          department, 
          location, 
          organization_name, 
          container_type 
        } = req.body;

  if (!longitude || !latitude || !location || !organization_name || !container_type) {
      return res
          .status(400)
          .json({ msg: "Please. send the latitude, longitude, location, organization name, and type of the container." });
  }

  const newContainer = new Container();
  newContainer.longitude = longitude;
  newContainer.latitude = latitude;
  newContainer.street_description = street_description || "";
      
  try {
    const container = await Container.findOne({ where: { longitude, latitude } });

    if ( container ) {
        return res
            .status(400)
            .json({ msg: "The Container already Exists" });
      }

  } catch(error) {
      if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
      }
  }

  try {
    const location_exist = await Location.findOne({ 
      select: { id_location: true },
      where: { location_name: location, department: { department_name: department, province: { province_name: province}} },
    });

  if (!location_exist) return res.status(404).json({ message: "Not Location found" });

  newContainer.location = location_exist;

  } catch(error) {
      if( error instanceof Error) {
        return res.status(500).json({ message: error.message});
      }
  }

  try {
    const organization_exist = await Organization.findOne({ 
      select: { organization_name: true },
      where: { organization_name },
  });

  if (!organization_exist) return res.status(404).json({ message: "Not organization found" });

    newContainer.organization = organization_name;     

  } catch(error) {
      if( error instanceof Error) {
        return res.status(500).json({ message: error.message});
      }
  }

  try {
    const type_exist = await Container_type.findOne({ 
      select: { id_container_type: true },
      where: { residuo: container_type },
  });

  if (!type_exist) return res.status(404).json({ message: "Not container type found" });
  
  newContainer. container_type = type_exist;      
  
  await newContainer.save();

    return res
        .status(200)
        .json({ ok: "true", messaje: "the container was successfully registered"});

  } catch(error) {
    if( error instanceof Error) {
      return res.status(500).json({ message: error.message});
    }
  }

};


// <-- endpoint to update container -->
export const updateContainer = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { longitude, 
          latitude,
          street_description, 
          location, 
          department, 
          province, 
          organization_name, 
          container_type 
        } = req.body;
    
  let update = {
    longitude: "",
    latitude: "",
    street_description: "",
    location: location,
    organization: organization_name,
    container_type: container_type
  }

  let container = null;

  try {
    container = await Container.findOneBy({ id_container: parseInt(id) });

    if (!container) return res.status(404).json({ message: "Not container found" });

    update.longitude = longitude || container?.longitude;
    update.latitude = latitude || container?.latitude;
    update.street_description = street_description || container?.street_description;

  } catch (error) {
      if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
      }
  }


  try {
    const location_exist = await Location.findOne({ 
      select: { id_location: true },
      where: { location_name: location, department: { department_name: department, province: { province_name: province}} },
    });
      
    if (!location_exist) return res.status(404).json({ message: "Not Location found" });

    update.location = location_exist;

  } catch (error) {
      if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
      }
  }

  try {
    const organization_exist = await Organization.findOne({ 
      select: { organization_name: true },
      where: { organization_name },
    });

  if (!organization_exist) return res.status(404).json({ message: "Not organization found" });

  update.organization = organization_exist;  

  } catch(error) {
      if( error instanceof Error) {
        return res.status(500).json({ message: error.message});
      }
  }

  try {
    const type_exist = await Container_type.findOne({ 
      select: { id_container_type: true },
      where: { residuo: container_type },
    });

    if (!type_exist) return res.status(404).json({ message: "Not container type found" });

    update.container_type = type_exist;

    await Container.update( { id_container: parseInt(id) }, update );

    return res.status(200).json({ ok: "true", message: "the container was successfully modified"});  

  } catch(error) {
      if( error instanceof Error) {
        return res.status(500).json({ message: error.message});
      }
  }

};


// <-- endpoint to delete container -->
export const deleteContainer = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const container = await Container.findOneBy({ id_container:  parseInt(id) });

    if (!container) return res.status(404).json({ message: "Container not found" });

    await Container.delete({ id_container:  parseInt(id) });

    return res.status(200).json({ ok:"true", message:"the container was successfully removed"});
  } catch (error) {
      if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
      }
  }

};
