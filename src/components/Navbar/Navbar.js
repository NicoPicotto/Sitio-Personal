import { React, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);

	return (
		<div className='navbar'>
			<h3 className='logo'>Nico Picotto</h3>
			<ul
				className={isMobile ? 'nav-links-mobile' : 'nav-links'}
				onClick={() => setIsMobile(false)}
			>
				<li className='nav-items'>About</li>
				<li className='nav-items'>Journey</li>
				<li className='nav-items'>Proyects</li>
				<li className='nav-items'>Contact</li>
			</ul>
			<button className='burger' onClick={() => setIsMobile(!isMobile)}>
				{isMobile ? (
					<i className='fas fa-times'></i>
				) : (
					<i className='fas fa-bars'></i>
				)}
			</button>
		</div>
	);
};

export default Navbar;
