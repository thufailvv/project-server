import dayjs from "dayjs";
import { UniversityModel } from "../../models/UniversityModel.js"

export const createUniversity = async (req, res) => {
    try {

        const { userName, password, passwordd, universityName, address, email, contactNumber, websiteURL, establishedYear, accreditationStatus, universityLogo, deanDirectorName, country, } = req.body;
        await UniversityModel.create({
            userName: userName,
            password: password,
            passwordd: passwordd,
            universityName: universityName,
            address: address,
            email: email,
            contactNumber: contactNumber,
            websiteURL: websiteURL,
            establishedYear: establishedYear,
            accreditationStatus: accreditationStatus,
            deanDirectorName: deanDirectorName,
            country: country,
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
        const { userName, password, passwordd, universityName, address, email, conatctNumber, websiteURL, establishedYear, accreditationStatus, universityLogo, deanDirectorName, country, } = req.body;

        const dataToUpdate = await UniversityModel.findById(dataId);
        dataToUpdate.userName = userName;
        dataToUpdate.password = password;
        dataToUpdate.passwordd = passwordd;
        dataToUpdate.universityName = universityName;
        dataToUpdate.address = address;
        dataToUpdate.email = email;
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

export const deleteUniversity = async (req, res) => {
    try {
        const universityId = req.params.id;

        const data = await UniversityModel.findById(universityId);

        if(!data) {
            return res.status(200).json({
                success:true,
                message:'No Data'
            })
        }

        data.deletedAt = dayjs();

        await data.save();

        return res.status(200).json({
            success: true,
            message: 'Deleted',
        });
    } catch (error) {
        console.log(error)
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
        const university = await UniversityModel.find({deletedAt:null});

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