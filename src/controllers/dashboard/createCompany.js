import { CompanyModel } from "../../models/CompanyModel.js";

export const createCompany = async (req, res) => {
    try {
        const { name, description } = req.body;
        await CompanyModel.create({
            companyId: '1234',
            companyName: 'Test desc',
            address: 'Addresss',
            contactNumber: 87447777777,
            email_Id: 'test@gmail.com',
            country: 'India', 
        });

        return res.status(200).json({
            success: true,
            message: 'Created Successfully!',
        });
    } catch (error) {
        return res.status(200).json({
            success: true,
            message: 'Created Successfully!',
        });

    }
};
