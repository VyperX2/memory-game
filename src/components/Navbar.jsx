import React from "react";

const Navbar = ({ score , hs }) => {
	return (
		<nav className="container flex sm:flex-row flex-col text-[#4f46e5]  tracking-tight  justify-between font-bold">
			<h4>Mateen's Memory Game</h4>
			<h4>Score : <span className=" text-indigo-500">{score}</span></h4>
      <h4>High Score : <span className=" text-indigo-500">{hs}</span> </h4>
		</nav>
	);
};

export default Navbar;
