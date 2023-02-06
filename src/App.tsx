import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Resume from './components/body/Resume';
import HomeContainer from './components/body/HomeContainer';
import './assets/style/style.css';

function App() {
	const location = useLocation();

	return (
		<>
			<Navbar />
			<main>
				<TransitionGroup>
					<CSSTransition
						timeout={2000}
						classNames='fade'
						key={location.pathname}>
						<Routes location={location}>
							<Route path='/' element={<HomeContainer />} />
							<Route path='/resume' element={<Resume />} />
						</Routes>
					</CSSTransition>
				</TransitionGroup>
			</main>
			<Footer />
		</>
	);
}

export default App;
