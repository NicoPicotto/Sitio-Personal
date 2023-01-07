import React from 'react';
import {
	SiAdobe,
	SiAdobeillustrator,
	SiAdobephotoshop,
	SiAdobexd,
	SiReact,
	SiHtml5,
	SiCss3,
	SiSass,
	SiBootstrap,
	SiJavascript,
	SiReactrouter,
	SiRedux,
} from 'react-icons/si';
import { BsWordpress } from "react-icons/bs"
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import './Technologies.css';

const Technologies = () => {
	return (
		<div className='techContainer' id='technologies'>
			<div className='techContent'>
				<Fade bottom>
					<h3 className='techText'>
						Here are some of the technologies that I work with.
					</h3>
				</Fade>
				<div className='iconsTech'>
					<Flip bottom cascade>
						<div className='col'>
							<li>
								<SiHtml5 color='#5777F7' /> HTML5
							</li>
							<li>
								<SiCss3 color='#5777F7' /> CSS3
							</li>
							<li>
								<SiSass color='#5777F7' /> SASS
							</li>
							<li>
								<SiBootstrap color='#5777F7' /> Bootstrap
							</li>
						</div>
						<div className='col'>
							<li>
								<SiJavascript color='#5777F7' /> Javascript
							</li>
							<li>
								<SiReact color='#5777F7' /> ReactJs
							</li>
							<li>
								<SiReact color='#5777F7' /> React Native
							</li>
							<li>
								<SiRedux color='#5777F7' /> Redux
							</li>
						</div>
						<div className='col'>
							<li>
								<BsWordpress color='#5777F7' /> Wordpress
							</li>
							<li>
								<SiAdobeillustrator color='#5777F7' /> Illustrator
							</li>
							<li>
								<SiAdobephotoshop color='#5777F7' /> Photoshop
							</li>
							<li>
								<SiAdobexd color='#5777F7' /> Xd
							</li>
						</div>
					</Flip>
				</div>
			</div>
		</div>
	);
};

export default Technologies;
