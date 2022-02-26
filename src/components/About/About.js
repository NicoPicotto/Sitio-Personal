import { React } from 'react';
import Fade from 'react-reveal/Fade';
import './About.css';

const About = () => {
	return (
		<div className='aboutContainer' id='about'>
			<div className='aboutText'>
				<Fade bottom>
					<h3 className='aboutHeader'>Hey you! I'm...</h3>
				</Fade>
				<Fade bottom>
					<h1 className='aboutName'>Nico Picotto</h1>
				</Fade>
				<Fade bottom>
					<h3 className='aboutFooter'>
						Graphic Designer and Frontend Developer
					</h3>
				</Fade>
			</div>
		</div>
	);
};

export default About;
