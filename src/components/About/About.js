import { React } from 'react';
// import { useSpring, animated, config } from 'react-spring';
import './About.css';

const About = () => {
	// const props = useSpring({
	// 	from: { opacity: 0, y: -100 },
	// 	to: { opacity: 1, y: 0 },
	// 	config: config.molasses,
	// });

	return (
		<div className='aboutContainer' id='about'>
			<div className='aboutText'>
				<h3 className='aboutHeader'>Hey you! I'm...</h3>
				<h1 className='aboutName'>Nico Picotto</h1>
				<h3 className='aboutFooter'>Graphic Designer and Frontend Developer</h3>
			</div>
		</div>
	);
};

export default About;
