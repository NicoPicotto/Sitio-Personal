import { React, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './Contact.css';

const Contact = () => {
	const [sub, setSub] = useState(false);

	return (
		<div className='formContainer' id='contact'>
			<Form
				className='formInside'
				action='https://formsubmit.co/picottonico@gmail.com'
				method='POST'
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

				<Button className='submit' type='submit' onClick={() => setSub(true)}>
					{sub ? 'Thanks for your message!' : 'Submit'}
				</Button>
			</Form>
		</div>
	);
};

export default Contact;
