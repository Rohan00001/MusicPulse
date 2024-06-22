import React from 'react';

const DetailsHeader = ({ artistData, songData }) => {
	return (
		<div className='relative w-full flex flex-col'>
			<div className='w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28' />

			<div className='absolute inset-0 flex items-center'>
				<img
					alt='profile'
					src={artistData?.attributes?.artwork?.url}
					className='sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black'
				/>

				<div className='ml-5'>
					<p className='font-bold sm:text-3xl text-xl text-white'>
						{artistData?.attributes?.name || songData?.title}
					</p>

					<p className='text-base text-gray-400 mt-2'>
						{artistData?.attributes?.genreNames
							.map((genre) => genre)
							.join(', ')}
					</p>
				</div>
			</div>

			<div className='w-full sm:h-44 h-24' />
		</div>
	);
};

export default DetailsHeader;
