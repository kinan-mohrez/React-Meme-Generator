import React from 'react';
import { useState, useEffect } from 'react';

export default function Meme({ meme }) {
	// console.log({ meme });
	const { name, url, box_count } = meme;
	const [topText, setToptext] = useState('');
	const [bottomText, setBottomtext] = useState('');

	function handleChangeTop(event) {
		console.log(event.target.value);
		setToptext(event.target.value);
	}

	function handleChangeBottem(event) {
		console.log(event.target.value);
		setBottomtext(event.target.value);
	}

	return (
		<div>
			<form className='meme-form'>
				<input
					type='text'
					name='topText'
					placeholder='Top Text'
					onChange={handleChangeTop}
				/>
				<input
					type='text'
					name='bottomText'
					placeholder='Bottom Text'
					onChange={handleChangeBottem}
				/>
				<button>Generate</button>
			</form>

			<div className='container'>
				<h3>{name}</h3>
				<img src={url} alt='' />
				<div className='centerTop'>
					<h2 className='top'>{topText}</h2>
				</div>
				<div className='centerBottom'>
					<h2 className='bottom'>{bottomText}</h2>
				</div>
			</div>
		</div>
	);
}
