import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import { BsDisplayFill, BsGithub, BsBehance } from 'react-icons/bs';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';
import img4 from '../../img/img4.jpg';
import img5 from '../../img/img5.jpg';
import './Proyects.css';

const Proyects = () => {
	return (
		<div className='proyectsContainer' id='proyects'>
			<div className='cardTextContainer'>
				<h3 className='proyectText'>Here are some of my proyects.</h3>
				<h3 className='proyectText'>
					You can see more by clicking on the links on the left.
				</h3>
			</div>
			<CardGroup className='groupContainer'>
				<Card className='card'>
					<Card.Img variant='top' src={img2} className='cardImg' />
					<Card.Body>
						<Card.Title className='cardTitle'>Pinturerías Norte</Card.Title>
						<Card.Text className='cardText'>
							E-commerce for paint shop, using ReactJs, React-Boostrap, React Router DOM, React Tostify and Firebase as database.{' '}
						</Card.Text>
					</Card.Body>
					<Card.Footer className='cardFooter'>
						<small>
							See more about this proyect{' '}
							<a
								href='https://zen-goldberg-ea3708.netlify.app/'
								target='_blank'
							>
								<BsDisplayFill className='seeMoreIcons' />{' '}
							</a>
							<a
								href='https://github.com/NicoPicotto/proyectoFinalReactJs'
								target='_blank'
							>
								<BsGithub />
							</a>{' '}
							<a href='https://www.behance.net/gallery/134212771/Sitio-Web-Pinturerias-Norte'
								target='_blank'><BsBehance /></a>
						</small>
					</Card.Footer>
				</Card>
                <Card className='card'>
					<Card.Img variant='top' src={img3} className='cardImg' />
					<Card.Body>
						<Card.Title className='cardTitle'>Karina Aguirre's Art Workshop</Card.Title>
						<Card.Text className='cardText'>
							E-commerce for local artist & educator, using HTML, CSS and Javascript.{' '}
						</Card.Text>
					</Card.Body>
					<Card.Footer className='cardFooter'>
						<small>
                        See more about this proyect{' '}
							<a
								href='https://amazing-mestorf-02bced.netlify.app/'
								target='_blank'
							>
								<BsDisplayFill className='seeMoreIcons' />{' '}
							</a>
							<a
								href='https://github.com/NicoPicotto/tallerArteKarinaAguirre'
								target='_blank'
							>
								<BsGithub />
							</a>{' '}
							<a href='https://www.behance.net/gallery/134212265/Sitio-Web-Karina-Aguirre-Taller-de-Arte'
								target='_blank'><BsBehance /></a>
						</small>
					</Card.Footer>
				</Card>
			</CardGroup>
			<CardGroup className='groupContainer'>
            <Card className='card'>
					<Card.Img variant='top' src={img4} className='cardImg' />
					<Card.Body>
						<Card.Title className='cardTitle'>Poasada del Cuarto Río</Card.Title>
						<Card.Text className='cardText'>
                        Website that gathers useful resources and information about the game Dungeons & Dragons. Created using HTML and CSS.{' '}
						</Card.Text>
					</Card.Body>
					<Card.Footer className='cardFooter'>
						<small>
							See more about this proyect{' '}
							<a
								href='https://posadadelcuartorio.000webhostapp.com/'
								target='_blank'
							>
								<BsDisplayFill className='seeMoreIcons' />{' '}
							</a>
							<a
								href='https://github.com/NicoPicotto/posadaDelCuartoRio'
								target='_blank'
							>
								<BsGithub />
							</a>{' '}
							<a href='https://www.behance.net/gallery/134211359/Sitio-Web-Posada-del-Cuarto-Rio'
								target='_blank'><BsBehance /></a>
						</small>
					</Card.Footer>
				</Card>
                <Card className='card'>
					<Card.Img variant='top' src={img5} className='cardImg' />
					<Card.Body>
						<Card.Title className='cardTitle'>Personal CV Website</Card.Title>
						<Card.Text className='cardText'>
							Personal Curriculum Vitae type site that shows my academic information, work history and skills.{' '}
						</Card.Text>
					</Card.Body>
					<Card.Footer className='cardFooter'>
						<small>
							See more{' '}
							<a
								href='https://nicopicotto.com/'
								target='_blank'
							>
								<BsDisplayFill className='seeMoreIcons' />{' '}
							</a>
							<a
								href='https://github.com/NicoPicotto/sitioPersonal'
								target='_blank'
							>
								<BsGithub />
							</a>{' '}
							<a href='https://www.behance.net/gallery/134213161/Sitio-Web-Nico-Picotto'
								target='_blank'><BsBehance /></a>
						</small>
					</Card.Footer>
				</Card>
			</CardGroup>
		</div>
	);
};

export default Proyects;
