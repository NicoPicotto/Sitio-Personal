import React from 'react';
import { BsLinkedin, BsGithub, BsBehance } from 'react-icons/bs';
import './Links.css';

const Links = () => {
	return (
		<div className='iconsContainer'>
			<ul>
				<a href='https://www.linkedin.com/in/nicolaspicotto/' target='_blank'>
					<li>
						<BsLinkedin />
					</li>
				</a>
				<a href='https://github.com/NicoPicotto' target='_blank'>
					<li>
						<BsGithub />
					</li>
				</a>
				<a href='https://www.behance.net/nicolaspicotto' target='_blank'>
					<li>
						<BsBehance />
					</li>
				</a>
			</ul>
		</div>
	);
};

export default Links;
