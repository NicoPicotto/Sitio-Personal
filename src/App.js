import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Links from './components/Links/Links';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Technologies from './components/Technologies/Technologies';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<About />
			<Technologies />
			<Links />
		</div>
	);
}

export default App;
