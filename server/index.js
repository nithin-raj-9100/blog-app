import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt, { genSaltSync } from 'bcrypt';
import jsw from 'jsonwebtoken';
import * as dotenv from 'dotenv';

// Internal imports
import User from './models/User.js';

const salt = genSaltSync(10);
const secret = 'asdfghjkasdfghjk';

const app = express();

dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));

// Database connection and setup (MongoDB)
async function main() {
	await mongoose.connect(
		`mongodb+srv://blog:${process.env.MONGO_PASS}@blog.sgw39dd.mongodb.net/?retryWrites=true&w=majority`,
	);
	console.log('Connected to database');
}

main().catch(err => console.log(err));

app.post('/register', async (req, res) => {
	const { email, password } = req.body;
	try {
		// TODO: Check if user already exists
		// const existingUser = await User.find({ email });
		// const existingUser = await User.find({ email: email })
		// 	.exec()
		// 	.then(doc => {
		// 		return doc;
		// 	});

		// if (existingUser.length > 0) {
		// 	return res.status(400).send('User already exists');
		// }

		const user = new User({
			email,
			password: await bcrypt.hash(password, salt),
		});

		await user.save().then(() => {
			res.status(201).send(user);
			console.log('User created');
		});
	} catch (error) {
		console.log(error);
		res.status(400).send(error);
	}
	console.log(req.body);
});

app.post('/login', async (req, res) => {
	const { email, password } = req.body;
	try {
		const userDoc = await User.find({ email: email })
			.exec()
			.then(doc => {
				return doc;
			});

		const passOk = bcrypt.compareSync(password, userDoc[0]['password']);

		if (passOk) {
			// jwt.sign()
			jsw.sign(
				{
					email,
					id: userDoc[0]['_id'],
				},
				secret,
				{ expiresIn: '1h' },
				(err, token) => {
					if (err) console.log(err);
					res.cookie('token', token, { httpOnly: true }).json(
						'Logged in',
					);
				},
			);
		} else {
			res.status(400).send('Login failed');
		}
	} catch (error) {
		console.log(error);
		res.status(400).send('wrong credentials');
	}
});

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(4000, () => {
	console.log('Example app listening on port 4000!');
});
