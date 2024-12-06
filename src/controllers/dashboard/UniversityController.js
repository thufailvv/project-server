import { UniversityModel } from "../../models/UniversityModel"

export const createUniversity = async (req, res) => {
    try{
        const { universityId, universityName, address, email_Id, conatctNumber, websiteURL, establishedYear, accreditationStatus, universityLogo, deanDirectorName, country, } = req.body;
        await UniversityModel.create({
            universityId : universityId,
            universityName : universityName,
            address : address,
            email_Id : email_Id,
            conatctNumber : conatctNumber,
            websiteURL : websiteURL,
            establishedYear : establishedYear,
            accreditationStatus : accreditationStatus,
            country : country,
        });

        return res.status(200).json({
            success : true,
            message : 'Created Successfully',
        });
    }catch (error){
        return res.status(50).json({
            success : false,
            message : error.message,
        });
    }
};

export const updateUniversity =async (req, res) => {
    try {
        const dataId = req.params.id;
        const { universityId, universityName, address, email_Id, conatctNumber, websiteURL, establishedYear, accreditationStatus, universityLogo, deanDirectorName, country, } = req.body;

        const dataToUpdate = await UniversityModel.findById(dataId);
        dataToUpdate.universityId = universityId;
        dataToUpdate.universityName = universityName;
        dataToUpdate.address = address;
        dataToUpdate.email_Id = email_Id;
        dataToUpdate.conatctNumber = conatctNumber;
        dataToUpdate.websiteURL = websiteURL;
        dataToUpdate.establishedYear = establishedYear;
        dataToUpdate.accreditationStatus = accreditationStatus;
        dataToUpdate.universityLogo = universityLogo;
        dataToUpdate.deanDirectorName = deanDirectorName;
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

    export const deleteUniversity =async (req, res) => {
        try {
            const universityId = req.params.id;

            await UniversityModel.findByAndDelete(universityId);

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

    export const viewUniversity = async (req, res) => {
        try {
            const universityId = req.params.id;

            const university = await UniversityModel.findById(universityId);

            return req.status(200).json({
                success: true,
                message: 'Fetched',
                data: { university: university},
            });
        }   catch (error) {
            return res.status(500).json({
                success: false,
                message: 'server error',
            });
        }
    };

    export const getAllUniversity = async (req, res) => {
        try {
            const university = await UniversityModel.find();

            return res.status(200).json({
                success: true,
                message: 'All Data Fetched',
                data: { university: university},
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'server error',
            });
        }
    };