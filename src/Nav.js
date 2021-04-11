import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import './Nav.css';
import netflix__logo from './images/netflix__logo.png';
import netflix__avatar from './images/netflix__avatar.png';

function Nav() {
	const [show, handleShow] = useState(false);
	const history = useHistory();

	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', transitionNavBar);
		return () => window.removeEventListener('scroll', transitionNavBar);
	}, []);
	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<img
				onClick={() => history.push('/')}
				className="nav__logo"
				// src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
				src={netflix__logo}
				alt="Netflix logo"
			/>
			<img
				onClick={() => history.push('/profile')}
				className="nav__avatar"
				// src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
				src={netflix__avatar}
				alt=""
			/>
		</div>
	);
}

export default Nav;
