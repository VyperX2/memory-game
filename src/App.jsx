import React from "react";
import { useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const App = () => {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(JSON.parse(localStorage.getItem('highScore')) || 0);
	const [isAlive, setIsAlive] = useState(true);

  	const GameEnded = () => {
		return (
			<div className="flex justify-center items-center h-screen w-screen flex-col gap-10">
				<h1 className="text-[#e11d48] text-4xl font-bold">Game Ended</h1>
        <button
        className=" font-semibold tracking-tighter bg-[#e11d48] rounded-md shadow-lg shadow-[rgba(225,29,72,0.5)] py-2 px-4 text-white uppercase hover:-translate-y-4 transition-all" 
        onClick={() => setIsAlive(prev => !prev)}>Restart</button>
			</div>
		);
	};

	return (
		<div className=" h-screen w-screen flex flex-col overflow-x-hidden">
			<Navbar score={score} hs={highScore} />
			{isAlive ?<Main
				setScore={setScore}
				setHighScore={setHighScore}
				hs={highScore}
				score={score}
				setIsAlive={setIsAlive}
			/>: <GameEnded />}
		</div>
	);
};

export default App;
