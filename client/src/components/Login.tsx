import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [redirect, setRedirect] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();
		await axios
			.post(
				'http://127.0.0.1:4000/login',
				{
					email,
					password,
				},
				{
					withCredentials: true,
				},
			)
			.then(res => {
				console.log(res);
				console.log(res.data);
				if (res.status === 200) {
					setRedirect(true);
					console.log('logged in');
				} else {
					console.log('wrong credentials');
				}
			});

		setEmail('');
		setPassword('');
	};

	if (redirect) {
		return <Navigate to='/' />;
	}

	return (
		<div className=''>
			<div className='flex h-screen flex-col py-9 '>
				<div className='w-full '>
					<Navbar />
				</div>

				<div className='flex h-full flex-col items-center justify-center'>
					<form
						className='flex flex-col justify-center'
						onSubmit={handleSubmit}
					>
						<label htmlFor='email' className='text-center text-3xl'>
							Email
						</label>
						<input
							type='email'
							name='email'
							placeholder='username'
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
							className='mt-6 rounded-xl border-2  border-slate-600 px-60 py-2
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
							name='password'
							required
							value={password}
							onChange={e => setPassword(e.target.value)}
							placeholder='password'
							className='mt-6 rounded-xl border-2 border-slate-600 px-60 py-2 
								focus:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-600'
						/>

						<button
							type='submit'
							className='mt-6 rounded-xl border-2 border-slate-600 bg-slate-600 px-[310px] py-2 text-center text-white
							transition duration-500 ease-in-out hover:bg-slate-700
							focus:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-600'
						>
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
