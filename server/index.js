import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';
import bcrypt, { genSaltSync } from 'bcrypt';

// Internal imports
import User from './models/User.js';

const app = express();
dotenv.config();

const salt = genSaltSync(10);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Database connection and setup (MongoDB)
async function main() {
	await mongoose.connect(
		`mongodb+srv://blog:${process.env.MONGO_PASS}@blog.sgw39dd.mongodb.net/?retryWrites=true&w=majority`,
	);
	() => {
		console.log('Connected to database');
	};
}

main().catch(err => console.log(err));

app.post('/register', async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = new User({
			email,
			password: await bcrypt.hash(password, salt),
		});
		await user.save();
	} catch (error) {
		res.status(400).send(error);
	}
	console.log(req.body);
});

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(4000, () => {
	console.log('Example app listening on port 4000!');
});
