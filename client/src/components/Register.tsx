import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		axios
			.post('http://127.0.0.1:4000/register', {
				email,
				password,
			})
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
			.finally(() => {
				console.log('finally');
			});

		setEmail('');
		setPassword('');
		// window.location.replace('/login');
	};

	return (
		<div className=''>
			<div className='flex h-screen flex-col  py-9 '>
				<div className='w-full '>
					<Navbar />
				</div>
				<div className='flex h-full flex-col items-center justify-center'>
					<form
						className='flex flex-col justify-center'
						onSubmit={handleSubmit}
					>
						<label
							htmlFor='email'
							className='text-center text-3xl '
						>
							Email
						</label>
						<input
							type='email'
							required
							name='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							placeholder='email'
							className='mt-6 rounded-xl border-2 border-slate-600 px-60 py-2 placeholder:text-center
							focus:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-600'
						/>

						<label
							htmlFor='password'
							className='text-center text-3xl'
						>
							Password
						</label>
						<input
							type='password'
							required
							name='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							placeholder='password'
							className='mt-6 rounded-xl border-2 border-slate-600 px-60 py-2
								placeholder:text-center focus:border-slate-600 focus:outline-none focus:ring-2
								focus:ring-slate-600'
						/>

						<button
							// onClick={async e => {
							// 	e.preventDefault();
							// 	console.log('clicked');
							// 	await fetch('http://localhost:4000/register', {
							// 		method: 'POST',
							// 		headers: {
							// 			'Content-Type': 'application/json',
							// 		},
							// 		body: JSON.stringify({
							// 			email,
							// 			password,
							// 		}),
							// 	});
							// 	console.log(email, password);
							// }}
							type='submit'
							className='mt-6 rounded-xl border-2 border-slate-600 bg-slate-600 px-[310px] py-2 text-white
							transition duration-500 ease-in-out hover:bg-slate-700
							focus:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-600'
						>
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
