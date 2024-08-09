import React from "react";
import MainSlider from "@/components/mainSlider";
import Trending from "./trending";
import AllBlogPost from "./allBolgPost";

const MainPage = () => {
	return (
		<div className=" flex flex-col items-center w-full gap-24">
			<MainSlider />
			<Trending />
			<AllBlogPost />
		</div>
	);
};

export default MainPage;
