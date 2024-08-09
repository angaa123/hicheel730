import React from "react";
import MainSlider from "@/components/mainSlider";
import Trending from "./trending";

const MainPage = () => {
	return (
		<div className=" flex flex-col items-center w-full">
			<MainSlider></MainSlider>
			<Trending></Trending>
		</div>
	);
};

export default MainPage;
