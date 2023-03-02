import './App.css';
import { Link } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<div className=''></div>
			<div className='flex justify-end '>
				<Link to='/login'>
					<button className='rounded-xl bg-slate-600 px-4 py-2 text-3xl text-white'>
						Home
					</button>
				</Link>
				<Link to='/register'>
					<button className='rounded-xl bg-slate-600 px-4 py-2 text-3xl text-white'>
						Register
					</button>
				</Link>
			</div>
		</div>
	);
}

export default App;
