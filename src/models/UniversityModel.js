import mongoose from 'mongoose';

const universitySchema = new mongoose.Schema(
	{
		userName : {
			type: String,
			required: true,
		},
		password : {
			type: String,
			required: true,
		},
		passwordd : {
			type: String,
			required: true,
		},
	    universityName : {
			type: String,
			required: true,
		},
		address : {
			type: String,
			required: false,
		},
		email_Id : {
			type: String,
			required: false,
		},
		contactNumber : {
			type: Number,
			required: true,
		},
		websiteURL : {
			type: String,
			required: false,
		},
		establishedYear : {
			type: Number,
			required: false,
		},
		accreditationStatus : {
			type: String,
			required: false,
		},
		universityLogo : {
			type: String,
			required: false,
		},
		deanDirectorName : {
			type: String,
			required: false,
		},
		country : {
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

export const UniversityModel = mongoose.model('universities', universitySchema);