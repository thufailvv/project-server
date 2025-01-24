import path from "path";
import { CertificateModel as CertificateModel } from "../../models/CertificateModel.js"
import dayjs from "dayjs";

export const createCertificate = async (req, res) => {
    try {
const {userId} = req.user;
        const { certificateNumber, studentId, studentName, issueDate, courseName, collegeName, universityName, courseDuration, affiliationNumber, } = req.body;

        let universityLogo;
        console.log(req.file)

        if (req.file) {
            universityLogo = 'uploads' + req.file?.path.split(path.sep + 'uploads').at(1);

        }
        console.log(universityLogo)

        await CertificateModel.create({
            universityId:userId,
            certificateNumber: certificateNumber,
            studentId: studentId,
            studentName: studentName,
            issueDate: issueDate,
            courseName: courseName,
            collegeName: collegeName,
            universityName: universityName,
            courseDuration: courseDuration,
            affiliationNumber: affiliationNumber,
            universityLogo: universityLogo,
        });

        return res.status(200).json({
            success: true,
            message: 'Created Successfully',
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const updateCertificate = async (req, res) => {
    try {
        const dataId = req.params.id;
        const { certificateNumber, studentid, studentName, issueDate, courseName, collegeName, universityName, courseDuration, affiliationNumber, } = req.body;

        let universityLogo;

        const dataToUpdate = await CertificateModel.findById(dataId);
        // console.log(req.file)
        // console.log(req.body)

        universityLogo = dataToUpdate.universityLogo

        if (req.file) {
            universityLogo = 'uploads' + req.file?.path.split(path.sep + 'uploads').at(1);
        }


        dataToUpdate.certificateNumber = certificateNumber;
        dataToUpdate.studentid = studentid;
        dataToUpdate.studentName = studentName;
        dataToUpdate.issueDate = issueDate;
        dataToUpdate.courseName = courseName;
        dataToUpdate.collegeName = collegeName;
        dataToUpdate.universityName = universityName;
        dataToUpdate.courseDuration = courseDuration;
        dataToUpdate.affiliationNumber = affiliationNumber;
        dataToUpdate.universityLogo = universityLogo;

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

export const deleteCertificate = async (req, res) => {
    try {
        const certificateId = req.params.id;
        console.log('id:::::: delete', certificateId)
        const data = await CertificateModel.findById(certificateId);
        console.log('data', data)
        data.deletedAt = new dayjs();

        data.save();


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

        console.log('id::::', certificateId)
        const certificate = await CertificateModel.findById(certificateId);

        console.log('data:::', certificate);
        return res.status(200).json({
            success: true,
            message: 'Fetched',
            data: { certificate: certificate },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'server error',
        });
    }
};

export const getAllCertificate = async (req, res) => {
    try {
        const {userId} =req.user;
        const certificate = await CertificateModel.find({ deletedAt: null,universityId:userId });
        console.log(certificate)
        return res.status(200).json({
            success: true,
            message: 'All Data Fetched',
            data: { certificate: certificate },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'server error',
        });
    }
};