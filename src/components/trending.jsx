import React from "react";
import DevToAPI from "@/components/miniAPI";

const Trending = () => {
	return (
		<div className="flex flex-col items-center w-full">
			<div className="w-5/6">
				<h1 className=" font-extrabold">Trending</h1>
				<div className="md:flex items-center "></div>
				<DevToAPI></DevToAPI>
			</div>
		</div>
	);
};

export default Trending;
