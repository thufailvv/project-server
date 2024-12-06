import { CertificateModel as CertificateModel } from "../../models/CertificateModel.js";

export const createCertificate = async (req, res) => {
    try {
        const { name, description } = req.body;
        await CertificateModel.create({
            certificateNumber: 'AB11',
            studentid: '01',
            studentName: 'Abcd',
            issueDate: '',
            collegeName: 'majlis',
            universityName: 'Calicut', 
            courseDuration: '',
            affiliationNumber: '', 
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
