import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import { BsDisplayFill, BsGithub, BsBehance } from 'react-icons/bs';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';
import img4 from '../../img/img4.jpg';
import img5 from '../../img/img5.jpg';
import img7 from '../../img/img7.jpg';
import img8 from '../../img/img8.jpg';
import Fade from 'react-reveal/Fade';
import './Proyects.css';

const Proyects = () => {
	return (
		<div className='proyectsContainer' id='proyects'>
			<div className='proyectContent'>
				<div className='cardTextContainer'>
					<Fade top>
						<h3 className='proyectText'>
							Here are some of my projects. You can see more by clicking on the
							icons below.
						</h3>
					</Fade>
				</div>
				<Fade bottom cascade>
					<CardGroup className='groupContainer'>
						<Card className='card'>
							<Card.Img variant='top' src={img4} className='cardImg' />
							<Card.Body>
								<Card.Title className='cardTitle'>Vegan Split</Card.Title>
								<Card.Text className='cardText'>
									Mobile app that helps to divide the expenses between vegans
									and non-vegans. Created with React Native.{' '}
								</Card.Text>
							</Card.Body>
							<Card.Footer className='cardFooter'>
								<small>
									See more about this project{' '}
									<a
										href='https://play.google.com/store/apps/details?id=com.nicopicotto.VeganSplit'
										target='_blank'
									>
										<BsDisplayFill className='seeMoreIcons' />{' '}
									</a>
									<a
										href='https://github.com/NicoPicotto/Vegan-Split'
										target='_blank'
									>
										<BsGithub />
									</a>{' '}
									<a
										href='https://www.behance.net/gallery/144563199/Vegan-Split-App-mobile'
										target='_blank'
									>
										<BsBehance />
									</a>
								</small>
							</Card.Footer>
						</Card>
						<Card className='card'>
							<Card.Img variant='top' src={img7} className='cardImg' />
							<Card.Body>
								<Card.Title className='cardTitle'>De Paso</Card.Title>
								<Card.Text className='cardText'>
									Mobile app that saves your moments. You can set text, photo
									and geolocation. Created with React Native, Redux, and SQLite.{' '}
								</Card.Text>
							</Card.Body>
							<Card.Footer className='cardFooter'>
								<small>
									See more about this project{' '}
									<a
										href='https://apps.apple.com/app/id1629212811'
										target='_blank'
									>
										<BsDisplayFill className='seeMoreIcons' />{' '}
									</a>
									<a
										href='https://github.com/NicoPicotto/saveMomentsApp'
										target='_blank'
									>
										<BsGithub />
									</a>{' '}
									<a
										href='https://www.behance.net/gallery/143247971/Unique-Travel-Blog-App-mobile'
										target='_blank'
									>
										<BsBehance />
									</a>
								</small>
							</Card.Footer>
						</Card>
					</CardGroup>
				</Fade>
				<Fade bottom cascade>
					<CardGroup className='groupContainer'>
						<Card className='card'>
							<Card.Img variant='top' src={img2} className='cardImg' />
							<Card.Body>
								<Card.Title className='cardTitle'>Pinturerías Norte</Card.Title>
								<Card.Text className='cardText'>
									E-commerce for paint shop, using ReactJs, React-Bootstrap,
									React Router DOM, React Tostify and Firebase as database.{' '}
								</Card.Text>
							</Card.Body>
							<Card.Footer className='cardFooter'>
								<small>
									See more about this project{' '}
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
									<a
										href='https://www.behance.net/gallery/134212771/Sitio-Web-Pinturerias-Norte'
										target='_blank'
									>
										<BsBehance />
									</a>
								</small>
							</Card.Footer>
						</Card>
						<Card className='card'>
							<Card.Img variant='top' src={img5} className='cardImg' />
							<Card.Body>
								<Card.Title className='cardTitle'>
									Local Council Website
								</Card.Title>
								<Card.Text className='cardText'>
									Government website for the local council. Created using
									ReactJs and Firestore Databse for self-management.{' '}
								</Card.Text>
							</Card.Body>
							<Card.Footer className='cardFooter'>
								<small>
									See more about this project{' '}
									<a href='https://concejocabrera.gob.ar/' target='_blank'>
										<BsDisplayFill className='seeMoreIcons' />{' '}
									</a>
									<a
										href='https://github.com/NicoPicotto/concejo-deliberante'
										target='_blank'
									>
										<BsGithub />
									</a>{' '}
									<a
										href='https://www.behance.net/gallery/141328135/Concejo-Deliberante-General-Cabrera'
										target='_blank'
									>
										<BsBehance />
									</a>
								</small>
							</Card.Footer>
						</Card>
					</CardGroup>
				</Fade>
				<Fade bottom cascade>
					<CardGroup className='groupContainer'>
						<Card className='card'>
							<Card.Img variant='top' src={img3} className='cardImg' />
							<Card.Body>
								<Card.Title className='cardTitle'>Cleanergy</Card.Title>
								<Card.Text className='cardText'>
									Website for a sustainable energy company. Created with ReactJs
									and Chakra UI.{' '}
								</Card.Text>
							</Card.Body>
							<Card.Footer className='cardFooter'>
								<small>
									See more about this project{' '}
									<a href='https://cleanergy.com.ar/' target='_blank'>
										<BsDisplayFill className='seeMoreIcons' />{' '}
									</a>
									<a
										href='https://github.com/NicoPicotto/Cleanergy-Web'
										target='_blank'
									>
										<BsGithub />
									</a>{' '}
									<a
										href='https://www.behance.net/gallery/155720771/Cleanergy-Renovables'
										target='_blank'
									>
										<BsBehance />
									</a>
								</small>
							</Card.Footer>
						</Card>
						<Card className='card'>
							<Card.Img variant='top' src={img8} className='cardImg' />
							<Card.Body>
								<Card.Title className='cardTitle'>
									Magnolia Blanquería
								</Card.Title>
								<Card.Text className='cardText'>
									E-commerce for a company that sells home products. Created
									with Wordpress, Woocommerce and Elementor.{' '}
								</Card.Text>
							</Card.Body>
							<Card.Footer className='cardFooter'>
								<small>
									See more about this proyect{' '}
									<a href='https://magnoliablanqueria.com/' target='_blank'>
										<BsDisplayFill className='seeMoreIcons' />{' '}
									</a>
									<a
										href='https://www.behance.net/gallery/157455903/Magnolia-Blanqueria'
										target='_blank'
									>
										<BsBehance />
									</a>
								</small>
							</Card.Footer>
						</Card>
					</CardGroup>
				</Fade>
			</div>
			<Fade bottom cascade>
				<div className='moreProyectsContainer'>
					<a href='https://github.com/NicoPicotto' target='_blank'>
						<div className='moreContainer'>
							<BsGithub /> See more on GitHub
						</div>
					</a>
					<a href='https://www.behance.net/nicolaspicotto' target='_blank'>
						<div className='moreContainer'>
							<BsBehance /> See more on Behance
						</div>
					</a>
				</div>
			</Fade>
		</div>
	);
};

export default Proyects;
