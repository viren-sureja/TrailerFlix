import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState('');

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	const youTubeOpts = {
		height: '390',
		width: '100%',
		playerVars: {
			autoplay: 1,
		},
	};

	const moviePosterClicked = (movieName) => {
		if (trailerUrl !== '') setTrailerUrl('');
		else {
			movieTrailer(movieName)
				.then((url) => {
					/*  
						https://www.youtube.com/watch?v=XtMThy8QKqU&t=5853s

						URL(url).search => will get the search part eg. ?v=XtMThy8QKqU&t=5853s
						urlParams.get('v') => will get this part eg. XtMThy8QKqU
					*/
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get('v'));
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row__posters">
				{movies.map((movie) => (
					<img
						key={movie.id}
						onClick={() =>
							moviePosterClicked(
								movie.name || movie.title || movie.orginal_name
							)
						}
						// className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
						className={`row__commonPoster ${
							isLargeRow ? 'row__posterLarge' : 'row__poster'
						}`}
						src={`${base_url}/${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>
			{trailerUrl !== '' && (
				<YouTube videoId={trailerUrl} opts={youTubeOpts} />
			)}
		</div>
	);
}

export default Row;
