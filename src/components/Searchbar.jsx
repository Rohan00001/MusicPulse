import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';
import { FaUserCircle, FaUserNinja } from 'react-icons/fa';

const Searchbar = () => {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		navigate(`/search/${searchTerm}`);
	};

	return (
		<div className='flex justify-between w-full py-0'>
			<form
				onSubmit={handleSubmit}
				className='flex items-center justify-center w-full max-w-[600px] px-4 py-2 mx-5 rounded-3xl  '
			>
				<input
					type='text'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					placeholder='Search for songs, artists, albums...'
					className='w-full py-2 text-white bg-transparent outline-none'
				/>
				<button
					type='submit'
					className='text-white'
				>
					<FiSearch className='w-6 h-6' />
				</button>
			</form>
			<div className='p-6'>
				<FaUserCircle className='w-10 h-10 text-gray-600' />
			</div>
		</div>
	);
};

export default Searchbar;
