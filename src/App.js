import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Links from './components/Links/Links';
import Mail from './components/Mail/Mail';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Technologies from './components/Technologies/Technologies';
import Proyects from './components/Proyects/Proyects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<About />
			<Technologies />
			<Proyects />
			<Contact />
			<Footer />
			<Links />
			<Mail />
		</div>
	);
}

export default App;
