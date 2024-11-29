import mongoose from 'mongoose';

const ConnectMongoDB = async () => {
	try {
		await mongoose.connect('mongodb+srv://hainoahh:PasswordNoahh@certificate.vxxtz.mongodb.net/project?retryWrites=true&w=majority&appName=certificate');
	} catch (err) {
		console.log(err);
	}
};

mongoose.connection.on('disconnected', () => {
	console.log('MongoDB disconnected!');
});

mongoose.connection.on('connected', () => {
	console.log('MongoDB connected!');
});

export default ConnectMongoDB;