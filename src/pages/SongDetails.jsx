import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';

// Dummy data
const dummySongData = {
	title: 'Naatu Naatu',
	artist: 'Rahul Sipligunj, Kaala Bhairava',
	sections: [
		{ type: 'INFO', text: 'Song information' },
		{
			type: 'LYRICS',
			text: [
				'Naatu Naatu, Naatu Naatu',
				'Hey, Naatu Naatu',
				'Naatu Naatu, Naatu Naatu',
				'Naatu Naatu, Naatu Naatu',
			],
		},
	],
	images: {
		coverart:
			'https://i.scdn.co/image/ab67616d0000b273c1d47d2f59c2fa4f7625f06d',
	},
};

const dummyRelatedSongsData = [
	{
		title: 'Ranjha',
		artist: 'B Praak, Jasleen Royal',
		key: '10002',
		images: {
			coverart:
				'https://i.scdn.co/image/ab67616d0000b2734bbbc4e7b2a5b2e223eb1e8c',
		},
	},
	{
		title: 'Shayad',
		artist: 'Arijit Singh',
		key: '10003',
		images: {
			coverart:
				'https://i.scdn.co/image/ab67616d0000b273f4d244b1b7b1a7a0f46c94e5',
		},
	},
	{
		title: 'Raataan Lambiyan',
		artist: 'Jubin Nautiyal, Asees Kaur',
		key: '10004',
		images: {
			coverart:
				'https://i.scdn.co/image/ab67616d0000b2737e1eb167ecb6d9c9b6f8c3ef',
		},
	},
	{
		title: 'Bijlee Bijlee',
		artist: 'Harrdy Sandhu',
		key: '10005',
		images: {
			coverart:
				'https://i.scdn.co/image/ab67616d0000b27355b7f69a31c7c9db9d0f85d1',
		},
	},
];

const SongDetails = () => {
	const dispatch = useDispatch();
	const { songid, id: artistId } = useParams();
	const { activeSong, isPlaying } = useSelector((state) => state.player);

	// Use dummy data instead of API call
	const data = dummyRelatedSongsData;
	const songData = dummySongData;

	const isFetchingSongDetails = false;
	const isFetchinRelatedSongs = false;
	const error = null;

	if (isFetchingSongDetails && isFetchinRelatedSongs)
		return <Loader title='Searching song details' />;

	console.log(songData);

	if (error) return <Error />;

	const handlePauseClick = () => {
		dispatch(playPause(false));
	};

	const handlePlayClick = (song, i) => {
		dispatch(setActiveSong({ song, data, i }));
		dispatch(playPause(true));
	};

	return (
		<div className='flex flex-col'>
			<DetailsHeader
				artistId={artistId}
				songData={songData}
			/>

			<div className='mb-10'>
				<h2 className='text-white text-3xl font-bold'>Lyrics:</h2>

				<div className='mt-5'>
					{songData?.sections[1].type === 'LYRICS' ? (
						songData?.sections[1]?.text.map((line, i) => (
							<p
								key={`lyrics-${line}-${i}`}
								className='text-gray-400 text-base my-1'
							>
								{line}
							</p>
						))
					) : (
						<p className='text-gray-400 text-base my-1'>
							Sorry, No lyrics found!
						</p>
					)}
				</div>
			</div>

			<RelatedSongs
				data={data}
				artistId={artistId}
				isPlaying={isPlaying}
				activeSong={activeSong}
				handlePauseClick={handlePauseClick}
				handlePlayClick={handlePlayClick}
			/>
		</div>
	);
};

export default SongDetails;
