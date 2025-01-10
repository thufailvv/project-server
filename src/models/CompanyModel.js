import mongoose from 'mongoose';

const companySchema = new mongoose.Schema(
	{
		userName : {
			type: String,
			required: true,
		},
		password : {
			type: String,
			required: true,
		},
	    companyName : {
			type: String,
			required: true,
		},
		address : {
			type: String,
			required: false,
		},
		email : {
			type: String,
			required: false,
		},
		contactNumber : {
			type: String,
			required: true,
		},
		websiteURL : {
			type: String,
			required: false,
		},
		establishedYear : {
			type: String,
			required: false,
		},
		
		companyLogo : {
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
			default:null
		},
	},
	{ timestamps: true },
);

export const CompanyModel = mongoose.model('companies', companySchema);