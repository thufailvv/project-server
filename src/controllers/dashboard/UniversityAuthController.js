import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import AuthModel from '../../models/AuthModel.js';
import env from '../../../env.js';
import { UniversityModel } from '../../models/UniversityModel.js';
export const postAuth = async (req, res,next) => {
	try {
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(env.ADMIN_PASSWORD, salt);

		// const hash = bcrypt.hashSync(req.body.password, salt);
		const newUser = new AuthModel({
			password: hash,
			email: env.ADMIN_EMAIL,

			// email: req.body.email,
		});
		await newUser.save();
		return res.status(200).send('User has been created!');
	} catch (err) {
		console.log(err)
	}
};
export const postAuthentication = async (req, res, next) => {
	try {
		const reqUserName = req.body.userName
		const reqPassword = req.body.password

		const user = await UniversityModel.findOne({ userName: reqUserName });

		if (!user) {
			return res.status(401).json({
				success: false,
				message: 'Authentication failed. User not found.',
			});
		}

		const isPasswordValid = bcrypt.compareSync(reqPassword, user.password);
console.log(isPasswordValid)
		if (!isPasswordValid) {
			return res.status(401).json({
				success: false,
				message: 'Authentication failed. Invalid password.',
			});
		}

		const accessToken = jwt.sign({ userId: user._id }, env.JWT_SECRET_KEY, { expiresIn: env.JWT_EXPIRES });
		const userData = { email: user.email};

		return res.status(200).json({
			success: true,
			accessToken,
			userData,
		});
	} catch (err) {
		
		console.log(err)
	}
};