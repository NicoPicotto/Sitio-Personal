import { React, useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
	const [sub, setSub] = useState(false);

		const form = useRef();

		const sendEmail = (e) => {
		  e.preventDefault();
	  
		  emailjs.sendForm('service_qa7giba', 'template_a1kfy0y', form.current, 'cZtBUVEwTm1-DRtsb')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
		};
	  

	return (
		<div className='formContainer' id='contact'>
			<Form
				className='formInside'
				ref={form} onSubmit={sendEmail}
			>
				<Fade bottom>
					<h4 className='formTitle'>Get in touch!</h4>
				</Fade>
				<Form.Group className='mb-3'>
					<Fade top cascade>
						<Form.Control
							type='hidden'
							name='_subject'
							value='¡Nuevo mensaje!'
						/>
						<Form.Control
							className='inputs'
							type='text'
							name='name'
							placeholder='Nombre'
							required
						/>
						<Form.Control
							className='inputs'
							type='email'
							name='email'
							placeholder='E-mail'
							required
						/>
						<Form.Control
							className='inputs'
							type='text'
							name='message'
							as='textarea'
							placeholder='Mensaje'
							rows={5}
							required
						/>
					</Fade>
				</Form.Group>

				<Button className='submit' value="send" type='submit' onClick={() => setSub(true)}>
					{sub ? 'Thanks for your message!' : 'Submit >'}
				</Button>
			</Form>
		</div>
	);
};

export default Contact;
