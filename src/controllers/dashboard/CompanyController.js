import path from "path";
import { CompanyModel as CompanyModel } from "../../models/CompanyModel.js"
import dayjs from "dayjs";
import bcrypt from 'bcrypt';
import { CertificateModel } from "../../models/CertificateModel.js";
import mongoose from "mongoose";


export const createCompany = async (req, res) => {
    try {
        // console.log(req.body)
        const { userName, password, companyName, address, email, contactNumber, websiteURL, establishedYear, country, isApproved } = req.body;

        let companyLogo;
        // console.log(req.file)

        if (req.file) {
            companyLogo = 'uploads' + req.file?.path.split(path.sep + 'uploads').at(1);

        }


        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);


        await CompanyModel.create({
            userName: userName,
            password: hash,
            companyName: companyName,
            address: address,
            email: email,
            contactNumber: contactNumber,
            websiteURL: websiteURL,
            establishedYear: establishedYear,
            companyLogo: companyLogo,
            country: country,
            isApproved: isApproved,
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

export const updateCompany = async (req, res) => {
    try {
        const dataId = req.params.id;
        const { userName, companyName, address, email, conatctNumber, websiteURL, establishedYear, country, } = req.body;

        let companyLogo;

        const dataToUpdate = await CompanyModel.findById(dataId);
        // console.log(req.file)
        // console.log(req.body)

        companyLogo = dataToUpdate.companyLogo

        if (req.file) {
            companyLogo = 'uploads' + req.file?.path.split(path.sep + 'uploads').at(1);
        }

        dataToUpdate.userName = userName;
        dataToUpdate.companyName = companyName;
        dataToUpdate.address = address;
        dataToUpdate.email = email;
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

export const Approving = async (req, res) => {
    try {

        const companyId = req.params.id;


        const data = await CompanyModel.findById(companyId);

        data.isApproved = 'Approve';

        data.save();

        return res.status(200).json({
            success: true,
            message: 'Approved',
        });



    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'server error',
        });
    }

};
export const Rejecting = async (req, res) => {
    try {

        const companyId = req.params.id;

        const data = await CompanyModel.findById(companyId);

        data.isApproved = 'Reject';

        data.save();

        return res.status(200).json({
            success: true,
            message: 'Rejected',
        });



    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'server error',
        });
    }

};

export const deleteCompany = async (req, res) => {
    try {
        const companyId = req.params.id;

        const data = await CompanyModel.findById(companyId);

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

export const viewCompany = async (req, res) => {
    try {
        const companyId = req.params.id;
        console.log(companyId)

        const company = await CompanyModel.findById(companyId);
        console.log('cerficate',company)
        return res.status(200).json({
            success: true,
            message: 'Fetched',
            data: { company: company },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'server error',
        });
    }
};

export const getAllCompany = async (req, res) => {
    try {
        const company = await CompanyModel.find({ deletedAt: null, isApproved: 'Approve' });

        return res.status(200).json({
            success: true,
            message: 'All Data Fetched',
            data: { company: company },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'server error',
        });
    }
};

export const getAllRequest = async (req, res) => {
    try {

        const company = await CompanyModel.find({ deletedAt: null, isApproved: 'Request' });

        return res.status(200).json({
            success: true,
            message: 'All Data Fetched',
            data: { company: company },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'server error',
        });
    }
};
export const certificateVerify = async (req, res) => {
    try {
        const { selectedOption, certificateNumber } = req.body
        console.log('daata::', req.body)
        const certificate = (await CertificateModel.aggregate([
            {
                $match: {
                    deletedAt: null,
                    universityId: new mongoose.Types.ObjectId(selectedOption),
                    certificateNumber: certificateNumber
                }
            }
        ])).at(0);
        console.log('certificate:::', certificate)
        if (!certificate) {
            return res.status(200).json({
                success: false,
                message: 'Certificate is not Valid',
            });
        }
        return res.status(200).json({
            success: true,
            message: 'Certificate is Valid',
            data: {
                certificateId: certificate._id
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'server error',
        });
    }
};