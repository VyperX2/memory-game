import { useEffect, useState } from "react";

const Card = ({
	name,
	img,
	id,
	data,
	handleClick,
	setScore,
	setHighScore,
	hs,
	score,
	setIsAlive,
}) => {
	const [currentPlayerName, setCurrentPlayerName] = useState("");
	const [count, setCount] = useState(0);

	useEffect(() => {
		score >= hs ? setHighScore(score) : setHighScore((prev) => prev);
    JSON.stringify(localStorage.setItem('highScore', hs))
	}, [score]);

	const checkMemory = (name) => {
		if (currentPlayerName === name) {
			setScore(0);
			setCurrentPlayerName("");

			setIsAlive((prev) => {
				console.log("Changed from:", prev);
				return !prev;
			});

			setCount((prevCount) => prevCount + 1);
		} else {
			setScore((prev) => prev + 1);
			setCurrentPlayerName(name);
		}
	};

	return (
		<div
			onClick={() => {
				checkMemory(name);
				handleClick();
			}}
			className=" cursor-pointer flex flex-col max-w-[240px] items-center  padding-0 hover:scale-110 transition-all rounded-lg overflow-hidden "
		>
			<img className="w-[240px] h-[300px] object-cover  " src={img} alt="" />
			<p className=" font-semibold">{name}</p>
		</div>
	);
};

export default Card;
