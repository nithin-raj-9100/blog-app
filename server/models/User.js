import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const UserSchema = new Schema({
	email: {
		type: String,
		// unique: true,
		// min: 4,
	},
	password: {
		type: String,
	},
});

const User = mongoose.model('User', UserSchema);

export default User;
