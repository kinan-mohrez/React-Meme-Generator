import React from 'react';
import Meme from './Meme';
import { useState } from 'react';

export default function Memes({ memes, memeIndex }) {
	console.log({ memeIndex });

	return (
		<div>
			{memes.length > 0 ? (
				<Meme meme={memes[memeIndex]} />
			) : (
				<div>loading .....</div>
			)}
		</div>
	);
}
