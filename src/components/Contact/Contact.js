import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
	return (
		<div className='formContainer' id="contact">
			<Form className='formInside'>
				<h4 className='formTitle'>Get in touch!</h4>
				<Form.Group className='mb-3'>
					<Form.Control className='inputs' type='name' placeholder='Nombre' />
					<Form.Control className='inputs' type='email' placeholder='E-mail' />
					<Form.Control
						className='inputs'
						as='textarea'
						placeholder='Mensaje'
						rows={5}
					/>
				</Form.Group>
				<Button className='submit' variant='primary' type='submit'>
					Enviar mensaje
				</Button>
			</Form>
		</div>
	);
};

export default Contact;
