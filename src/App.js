import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';

function App() {
	let user = null;
	return (
		<div className="App">
			<Router>
				{!user ? (
					<LoginScreen />
				) : (
					<Switch>
						<Route exact path="/">
							<HomeScreen />
						</Route>
						<Route path="/how">
							<h1>hello</h1>
						</Route>
					</Switch>
				)}
			</Router>
		</div>
	);
}

export default App;
