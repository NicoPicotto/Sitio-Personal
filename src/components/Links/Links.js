import React from 'react';
import { BsLinkedin, BsGithub, BsBehance } from "react-icons/bs";
import './Links.css';

const Links = () => {
	return (
		<div className='iconsContainer'>
			<ul>
				<li>
					<BsLinkedin />
				</li>
                <li>
					<BsGithub />
				</li>
                <li>
					<BsBehance />
				</li>
			</ul>
		</div>
	);
};

export default Links;
