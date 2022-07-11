import './App.css';
import React, { useState, useEffect } from 'react';
import Memes from './component/Memes';

function App() {
	const [memes, setMemes] = useState([]);
	const [memeIndex, setMemeIndex] = useState(0);

	useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then((response) => response.json())
			.then((res) => {
				// console.log(res);
				setMemes(res.data.memes);
				console.log(res.data.memes[0]);
			});
	}, []);

	function goBack() {
		console.log('goBack');
		setMemeIndex(memeIndex - 1);
	}
	function goForward() {
		console.log('goForward');
		setMemeIndex(memeIndex + 1);
	}

	return (
		<div className='App'>
			<button onClick={goBack}>Go Back</button>
			<button onClick={goForward}>Forward</button>
			<Memes memes={memes} memeIndex={memeIndex} />
		</div>
	);
}

export default App;
