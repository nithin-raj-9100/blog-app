import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	return (
		<div className=''>
			<div className='flex h-screen flex-col py-9 '>
				<div className='w-full '>
					<Navbar />
				</div>

				<div className='flex h-full flex-col items-center justify-center'>
					<form className=''>
						<div className=''>
							<input
								type='text'
								placeholder='username'
								value={username}
								onChange={e => setUsername(e.target.value)}
								required
								className='mt-6 rounded-xl border-2  border-slate-600 px-60 py-2
								 focus:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-600'
							/>
						</div>
						<div className=''>
							<input
								type='password'
								required
								value={password}
								onChange={e => setPassword(e.target.value)}
								placeholder='password'
								className='mt-6 rounded-xl border-2 border-slate-600 px-60 py-2 
								focus:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-600'
							/>
						</div>
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

function NavbVar() {
	return (
		<div className='flex justify-around '>
			<Link to='/'>
				<h1 className='rounded-xl bg-slate-600 px-4 py-2 text-3xl text-white'>
					Home
				</h1>
			</Link>

			<Link to='/register'>
				<h1 className='rounded-xl bg-slate-600 px-4 py-2 text-3xl text-white'>
					Register
				</h1>
			</Link>
		</div>
	);
}
