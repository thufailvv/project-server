import { CertificateModel as CertificateModel } from "../../models/CertificateModel"

export const createCertificate = async (req, res) => {
    try{
        const { certificateNumber, studentid, studentName, issueDate, collegeName, universityName, courseDuration,affiliationNumber,} = req.body;
        await CertificateModel.create({
            certificateNumber : certificateNumber,
            studentid :  studentid,
            studentName :  studentName,
            issueDate :  issueDate,
            collegeName : collegeName,
            universityName :universityName,  
            courseDuration : courseDuration ,
            affiliationNumber : affiliationNumber,
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