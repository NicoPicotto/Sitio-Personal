import React from 'react';
import {SiReact} from 'react-icons/si';
import "./Footer.css"

const Footer = () => {
	return (
		<div className='footerContainer'>
		<h3 className='footerText'> Created with ReactJs <SiReact color='#f2e205' /> Thanks for visiting!</h3>
		</div>
	);
};

export default Footer;
