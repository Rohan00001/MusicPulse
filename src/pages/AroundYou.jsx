import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { dummyCountryTracks } from '../assets/dummyCountryTracks';

const CountryTracks = () => {
	const [country, setCountry] = useState('INDIA'); // Set default country code
	const { activeSong, isPlaying } = useSelector((state) => state.player);

	// Simulating data fetching
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Simulate API call
		setTimeout(() => {
			setData(dummyCountryTracks);
			setLoading(false);
		}, 1000);
	}, []);

	if (loading) return <Loader title='Loading Songs around you...' />;
	if (error) return <Error />;

	return (
		<div className='flex flex-col'>
			<h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
				Around you <span className='font-black'>{country}</span>
			</h2>

			<div className='flex flex-wrap sm:justify-start justify-center gap-8'>
				{data.map((song, i) => (
					<SongCard
						key={song.key}
						song={song}
						isPlaying={isPlaying}
						activeSong={activeSong}
						data={data}
						i={i}
					/>
				))}
			</div>
		</div>
	);
};

export default CountryTracks;
