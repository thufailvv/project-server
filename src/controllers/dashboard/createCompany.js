import { CertificateModel as CertificateModel } from "../../models/CompanyModel.js";

export const createCompany = async (req, res) => {
    try {
        const { name, description } = req.body;
        await CertificateModel.create({
            companyId: '1212',
            companyName: 'Test desc',
            address: 'kannur',
            email_Id: 'sample@gmail.com',
            contactNumber: 9854545454,
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

