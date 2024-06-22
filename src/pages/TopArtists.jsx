import React, { useEffect, useState } from 'react';

import { ArtistCard, Error, Loader } from '../components';
import { topArtists } from '../assets/ArtistDetails';

const TopArtists = () => {
	const data = topArtists;
	const error = null;
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	if (loading) return <Loader title='Loading artists...' />;

	if (error) return <Error />;

	return (
		<div className='flex flex-col'>
			<h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
				Top Artists
			</h2>

			<div className='flex flex-wrap sm:justify-start justify-center gap-8'>
				{data.map((artist) => (
					<ArtistCard
						key={artist.key}
						artist={artist}
					/>
				))}
			</div>
		</div>
	);
};

export default TopArtists;
