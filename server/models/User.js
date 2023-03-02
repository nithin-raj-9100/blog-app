import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const UserSchema = new Schema({
	email: {
		type: String,
		// unique: true,
		// required: true,
		// min: 4,
	},
	password: {
		type: String,
		// required: true,
		// min: 6,
	},
});

const User = mongoose.model('User', UserSchema);

export default User;
