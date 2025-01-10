import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema(
	{
		certificateNumber : {
			type: String,
			required: true,
		},
	    studentId : {
			type: String,
			required: true,
		},
		studentName : {
			type: String,
			required: true,
		},
		issueDate : {
			type: String,
			required: false,
		},
		courseName : {
			type: String,
			required: false,
		},
		collegeName : {
			type: String,
			required: true,
		},
		universityName : {
			type: String,
			required: true,
		},
		courseDuration : {
			type: String,
			required: true,
		},
		
		affiliationNumber : {
			type: String,
			required: false,
		},
		universityLogo : {
			type: String,
			required: false,
		},
		
		deletedAt : {
			type: Date,
			required: false,
			default:null
		},
	},
	{ timestamps: true },
);

export const CertificateModel = mongoose.model('certificates', certificateSchema);