
import path from "path";
import { UniversityModel } from "../../models/UniversityModel.js"
import dayjs from "dayjs";
import bcrypt from 'bcrypt';


export const createUniversity = async (req, res) => {
    try {

        const { userName, password, universityName, address, email, contactNumber, websiteURL, establishedYear, deanDirectorName, country, isApproved } = req.body;

        console.log(req.body)
        let Logo;

        if (req.file) {
            Logo = 'uploads' + req.file?.path.split(path.sep + 'uploads').at(1);


        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        await UniversityModel.create({
            userName: userName,
            password: hash,
            universityName: universityName,
            address: address,
            email: email,
            contactNumber: contactNumber,
            websiteURL: websiteURL,
            establishedYear: establishedYear,
            universityLogo: Logo,
            deanDirectorName: deanDirectorName,
            country: country,
            isApproved: isApproved
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

export const updateUniversity = async (req, res) => {
    try {
        const dataId = req.params.id;
        const { userName, universityName, address, email, conatctNumber, websiteURL, establishedYear, deanDirectorName, country, } = req.body;


        let universityLogo;

        const dataToUpdate = await UniversityModel.findById(dataId);
        console.log(req.file)
        console.log(req.body)

        universityLogo = dataToUpdate.universityLogo

        if (req.file) {
            universityLogo = 'uploads' + req.file?.path.split(path.sep + 'uploads').at(1);
        }


        dataToUpdate.userName = userName;
        dataToUpdate.universityName = universityName;
        dataToUpdate.address = address;
        dataToUpdate.email = email;
        dataToUpdate.conatctNumber = conatctNumber;
        dataToUpdate.websiteURL = websiteURL;
        dataToUpdate.establishedYear = establishedYear;
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

export const Approving = async (req, res) => {
    try {

        const universityId = req.params.id;


        const data = await UniversityModel.findById(universityId);

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

        const universityId = req.params.id;

        const data = await UniversityModel.findById(universityId);

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
export const deleteUniversity = async (req, res) => {
    try {
        const universityId = req.params.id;

        const data = await UniversityModel.findById(universityId);

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
export const viewUniversity = async (req, res) => {
    try {
        const universityId = req.params.id;

        const university = await UniversityModel.findById(universityId);

        return res.status(200).json({
            success: true,
            message: 'Fetched',
            data: { university: university },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'server error',
        });
    }
};

export const getAllUniversity = async (req, res) => {
    try {
        const university = await UniversityModel.find({ deletedAt: null, isApproved: 'Approve' });

        return res.status(200).json({
            success: true,
            message: 'All Data Fetched',
            data: { university: university },
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
        const university = await UniversityModel.find({ deletedAt: null, isApproved: 'Request' });

        return res.status(200).json({
            success: true,
            message: 'All Data Fetched',
            data: { university: university },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'server error',
        });
    }
};