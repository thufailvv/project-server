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
		collegeName : {
			type: Number,
			required: true,
		},
		universityName : {
			type: Number,
			required: true,
		},
		courseDuration : {
			type: Number,
			required: true,
		},
		
		affiliationNumber : {
			type: String,
			required: false,
		},
		
		deletedAt : {
			type: Date,
			required: false,
		},
	},
	{ timestamps: true },
);

export const CertificateModel = mongoose.model('certificates', certificateSchema);