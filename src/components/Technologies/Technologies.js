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
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import './Technologies.css';

const Technologies = () => {
	return (
		<div className='techContainer reveal' id='technologies'>
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
								<SiAdobe color='#f2e205' /> Adobe Suite
							</li>
							<li>
								<SiAdobeillustrator color='#f2e205' /> Illustrator
							</li>
							<li>
								<SiAdobephotoshop color='#f2e205' /> Photoshop
							</li>
							<li>
								<SiAdobexd color='#f2e205' /> Xd
							</li>
						</div>
						<div className='col'>
							<li>
								<SiHtml5 color='#f2e205' /> HTML5
							</li>
							<li>
								<SiCss3 color='#f2e205' /> CSS3
							</li>
							<li>
								<SiSass color='#f2e205' /> SASS
							</li>
							<li>
								<SiBootstrap color='#f2e205' /> Bootstrap
							</li>
						</div>
						<div className='col'>
							<li>
								<SiJavascript color='#f2e205' /> Javascript
							</li>
							<li>
								<SiReact color='#f2e205' /> ReactJs
							</li>
							<li>
								<SiReactrouter color='#f2e205' /> React Router
							</li>
							<li>
								<SiRedux color='#f2e205' /> Redux
							</li>
						</div>
					</Flip>
				</div>
			</div>
		</div>
	);
};

export default Technologies;
