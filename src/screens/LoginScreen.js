import React, { useState } from 'react';
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';
import netflix__logo from '../images/netflix__logo.png';
import netflix__loginScreen__backGround from '../images/loginScreen__background.jpg';

function LoginScreen() {
	const [signIn, setSignIn] = useState(false);

	return (
		<div
			className="loginScreen"
			style={{
				background: `url(${netflix__loginScreen__backGround})
		center no-repeat`,
			}}
		>
			<div className="loginScreen__background">
				<img
					// src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					// src="../images/netflix__logo.png"
					src={netflix__logo}
					alt="loginScreen"
					className="loginScreen__logo"
				/>
				<button
					onClick={() => setSignIn(true)}
					className="loginScreen__button"
				>
					sign in
				</button>
				<div className="loginScreen__gradient" />
			</div>

			<div className="loginScreen__body">
				{signIn ? (
					<SignUpScreen />
				) : (
					<>
						<h1>Unlimited movies, TV shows and more.</h1>
						<h2>Watch anywhere. Cancel anytime.</h2>
						<h3>
							Ready to watch? Enter your email to create or restart your
							membership.
						</h3>
						<div className="loginScreen__input">
							<form action="">
								<input type="email" placeholder="Email Address" />
								<button
									onClick={() => setSignIn(true)}
									className="loginScreen__getStarted"
								>
									Get Started
								</button>
							</form>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default LoginScreen;
