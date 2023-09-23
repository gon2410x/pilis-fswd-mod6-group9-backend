import { Request, Response } from "express";
import { Organization } from "../entity/Organization";
import { Location } from "../entity/Location";


export const getOrganizations = async (req: Request, res: Response) => {

    try {
        const organizations = await Organization.find({ relations: { location: { department: { province: true }} } });
        return res.status(200).json(organizations);

    } catch(error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const createOrganization = async (req: Request, res: Response) => {
   
    const { organization_name, phone, email, organization_type, province, department, location } = req.body;

    if (!organization_name || !phone || !email || !organization_type || !location) {
        return res
            .status(400)
            .json({ msg: "Please. Send your organization name, phone, email, organization type and location" });
    }

    const newOrganization = new Organization();
      
    try {
        const organization = await Organization.find({ where: { organization_name } });

        if ( organization.length !== 0 ) {
            return res
                .status(400)
                .json({ msg: "The Organization already Exists" });
          }
  
        newOrganization.organization_name = organization_name;
        newOrganization.phone = phone;
        newOrganization.email = email;
        newOrganization.organization_type = organization_type;      

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
    
        newOrganization.location = location_exist;
        console.log(newOrganization);
        await newOrganization.save();

        return res
        .status(201)
        .json({ ok: "true", messaje: "the organization was successfully registered"});
    
    } catch(error) {
        if( error instanceof Error) {
            return res.status(500).json({ message: error.message});
        }
    }

};


export const updateOrganization = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { location, department, province } = req.body;
      
    try {
        const organization = await Organization.findOneBy({ organization_name: id });

        if (!organization) return res.status(404).json({ message: "Not organization found" });

        const id_l = await Location.findOne({ 
            select: { id_location: true },
            where: { location_name: location, department: { department_name: department, province: { province_name: province}} },
        });
            
        if (!id_l) return res.status(404).json({ message: "Not Location found" });
  
        const updtate_Organization = {
            organization_name: req.body.organization_name || organization.organization_name,
            phone: req.body.phone || organization.phone,
            email:req.body.email || organization.email,
            organization_type: req.body.organization_type || organization.organization_type,
            location : id_l
        }

        await Organization.update( { organization_name: id }, updtate_Organization );
  
        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const deleteOrganization = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const organization = await Organization.findOneBy({ organization_name: id });

        if (!organization) return res.status(404).json({ message: "Organization not found" });

        await Organization.delete({ organization_name: id });
  
        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
  };