import express from 'express';
import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize';
import {cwd} from 'process';
import ConnectMongoDB from './src/config/db.js';
import { DashboardRouter } from './src/routes/dashboard/MainRoutes.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use('/uploads', express.static(cwd() + '/uploads', { maxAge: 31557600 }));
app.use('/api/dashboard/',DashboardRouter);
app.use((req, res) => {
	const err = new Error();
	err.status = 404;
	err.message = 'Page not found.';
	return err;
});

//error handler
app.use((err, req, res, next) => {
	if (err.status === 404) {
		const errorMessage = err.message || 'Page Not Found';
		res.status(404).json({
			success: false,
			message: errorMessage,
		});
	} else {
		const errorStatus = err.status || 500;
		const errorMessage = err.message || 'Something went wrong';
		res.status(errorStatus).json({
			success: false,
			status: errorStatus,
			message: errorMessage,
		});
	}
	next();
});
ConnectMongoDB();
const PORT  = 5000;
app.listen(PORT, async () => {
	console.log(`Server listening to the port ${PORT}`);
});
