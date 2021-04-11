import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const unSubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				// login
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				);
			} else {
				// logout
				dispatch(logout());
			}
		});
		return unSubscribe;
	}, [dispatch]);

	return (
		<div className="App">
			<Router>
				{!user ? (
					<LoginScreen />
				) : (
					<Switch>
						<Route path="/profile">
							<ProfileScreen />
						</Route>
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
