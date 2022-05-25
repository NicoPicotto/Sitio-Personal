import { React } from 'react';
import Fade from 'react-reveal/Fade';
import img6 from '../../img/profile.png';
import './About.css';

const About = () => {
	return (
		<div className='aboutContainer' id='about'>
			<Fade bottom>
			<div className='imgAboutContainer'>
				<img className='imgAbout' src={img6}></img>
			</div>
			</Fade>
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
