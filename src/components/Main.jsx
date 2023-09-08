import Card from "./Card";
import data from "../data";
import { useState } from "react";

const Main = ({ setScore , setHighScore , hs ,score , setIsAlive}) => {
	const [playersData, setPlayersData] = useState(data);

	const shufflePlayers = () => {
		const shuffledPlayers = [...playersData];
		for (let i = shuffledPlayers.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledPlayers[i], shuffledPlayers[j]] = [
				shuffledPlayers[j],
				shuffledPlayers[i],
			];
		}
		setPlayersData(shuffledPlayers);
	};

	return (
		<main className="section container ">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-y-4">
				{playersData &&
					playersData.map((player) => {
						return (
							<Card
								key={player.id}
								name={player.name}
								img={player.picture}
								handleClick={shufflePlayers}
								id={player.id}
								setScore={setScore}
                setHighScore={setHighScore}
                hs={hs}
                score={score}
                setIsAlive={setIsAlive}
							/>
						);
					})}
			</div>
		</main>
	);
};

export default Main;
