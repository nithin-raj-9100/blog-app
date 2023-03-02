import { Link } from 'react-router-dom';

function Navbar() {
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
			<Link to='/login'>
				<h1 className='rounded-xl bg-slate-600 px-4 py-2 text-3xl text-white'>
					Login
				</h1>
			</Link>
		</div>
	);
}

export default Navbar;
