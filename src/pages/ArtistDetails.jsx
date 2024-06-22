import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { dummyArtistData } from '../assets/ArtistDetails';

const ArtistDetails = () => {
	const { id: artistId } = useParams();
	const { activeSong, isPlaying } = useSelector((state) => state.player);

	const artistData = dummyArtistData.find(
		(artist) => artist.id == parseInt(artistId)
	);
	console.log(artistData?.attributes?.views['top-songs']);
	const isFetchingArtistDetails = false;
	const error = null;

	if (isFetchingArtistDetails)
		return <Loader title='Loading artist details...' />;

	if (error) return <Error />;

	return (
		<div className='flex flex-col'>
			<DetailsHeader artistData={artistData} />

			<RelatedSongs
				data={artistData?.attributes?.views['top-songs'].data}
				artistId={artistId}
				isPlaying={isPlaying}
				activeSong={activeSong}
			/>
		</div>
	);
};

export default ArtistDetails;
