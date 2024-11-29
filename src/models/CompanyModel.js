import mongoose from 'mongoose';

const companySchema = new mongoose.Schema(
	{
		companyId : {
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
		email_Id : {
			type: String,
			required: false,
		},
		contactNumber : {
			type: Number,
			required: true,
		},
		websiteURL : {
			type: Number,
			required: false,
		},
		establishedYear : {
			type: Number,
			required: false,
		},
		companyLogo : {
			type: Number,
			required: false,
		},
		country : {
			type: Number,
			required: true,
		},
		deletedAt : {
			type: Date,
			required: false,
		},
	},
	{ timestamps: true },
);

export const CompanyModel = mongoose.model('companies', companySchema);