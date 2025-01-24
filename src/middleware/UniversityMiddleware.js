import jwt from 'jsonwebtoken';
import env from '../../env.js';

export const authMiddleware = (req, res, next) => {

console.log(req.headers)
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res.status(401).json({
			success: false,
			message: 'Access token not found',
		});
	}


	try {
		const token = authHeader.split(' ')[1];

		const decodeData = jwt.verify(token, env.JWT_SECRET_KEY);



		if (!decodeData) {
			return res.status(401).json({
				success: false,
				message: 'Access token not found',
			});

		}

		req.user = decodeData;

		next();
	} catch (error) {
		return res.status(401).json({
			success: false,
			message: 'Access token not found',
		});


	}
};