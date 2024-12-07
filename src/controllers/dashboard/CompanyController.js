import { CompanyModel as CompanyModel } from "../../models/CompanyModel.js"

export const createCompany = async (req, res) => {
    try{
        console.log(req.body)
        const { companyId, companyName, address, email_id, contactNumber, websiteURL, establishedYear, companyLogo, country, } = req.body;
        await CompanyModel.create({
            companyId : companyId,
            companyName : companyName,
            address : address,
            email_Id : email_id,
            contactNumber : contactNumber,
            websiteURL : websiteURL,
            establishedYear : establishedYear,
            country : country,
        });

        return res.status(200).json({
            success : true,
            message : 'Created Successfully',
        });
    }catch (error){
        console.log(error)
        return res.status(500).json({
            success : false,
            message : error.message,
        });
    }
};

export const updateCompany =async (req, res) => {
    try {
        const dataId = req.params.id;
        const { companyId, companyName, address, email_Id, conatctNumber, websiteURL, establishedYear, companyLogo, country, } = req.body;

        const dataToUpdate = await CompanyModel.findById(dataId);
        dataToUpdate.companyId = companyId;
        dataToUpdate.companyName = companyName;
        dataToUpdate.address = address;
        dataToUpdate.email_Id = email_Id;
        dataToUpdate.conatctNumber = conatctNumber;
        dataToUpdate.websiteURL = websiteURL;
        dataToUpdate.establishedYear = establishedYear;
        dataToUpdate.companyLogo = companyLogo;
        dataToUpdate.country = country;

        await dataToUpdate.save();

        return res.status(200).json({
            success: true,
            message: 'Updated',
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'server error',
        });
    }
    };

    export const deleteCompany =async (req, res) => {
        try {
            const companyId = req.params.id;

            await CompanyModel.findByAndDelete(companyId);

            return res.status(200).json({
                success: true,
                message: 'Deleted',
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'server error',
            });
        }

    };

    export const viewCompany = async (req, res) => {
        try {
            const companyId = req.params.id;

            const company = await CompanyModel.findById(companyId);

            return req.status(200).json({
                success: true,
                message: 'Fetched',
                data: { company: company},
            });
        }   catch (error) {
            return res.status(500).json({
                success: false,
                message: 'server error',
            });
        }
    };

    export const getAllCompany = async (req, res) => {
        try {
            const company = await CompanyModel.find();

            return res.status(200).json({
                success: true,
                message: 'All Data Fetched',
                data: { company: company},
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'server error',
            });
        }
    };