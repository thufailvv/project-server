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