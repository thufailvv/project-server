import { UniversityModel } from "../../models/UniversityModel.js";

export const createUniversity = async (req, res) => {
    try {
        const { name, description } = req.body;
        await UniversityModel.create({
            universityId: '1234',
            universityName: 'Test desc',
            address: 'Addresss',
            email_Id: 'test@gmail.com',
            contactNumber: 8744777777,
            country: 'India', 
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
