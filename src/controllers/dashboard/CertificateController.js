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

export const updateCertificate =async (req, res) => {
    try {
        const certificateId = req.params.id;
        const { name, description } = req.body;

        const dataToUpdate = await CertificateModel.findById(certificateId);
        dataToUpdate.name = name;
        dataToUpdate.description = description;

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

    export const deleteCertificate =async (req, res) => {
        try {
            const certificateId = req.params.id;

            await CertificateModel .findByAndDelete(certificateId);

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

    export const viewCertificate = async (req, res) => {
        try {
            const certificateId = req.params.id;

            const certificate = await CertificateModel.findById(certificateId);

            return req.status(200).json({
                success: true,
                message: 'Fetched',
                data: { certificate: certificate},
            });
        }   catch (error) {
            return res.status(500).json({
                success: false,
                message: 'server error',
            });
        }
    };

    export const getAllCertificate = async (req, res) => {
        try {
            const certificate = await CertificateModel.find();

            return res.status(200).json({
                success: true,
                message: 'All Data Fetched',
                data: { certificate: certificate},
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'server error',
            });
        }
    };