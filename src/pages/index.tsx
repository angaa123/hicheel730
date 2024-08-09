import Header from "@/components/header.jsx";
import MainPage from "@/components/mainPage.jsx";
import React from "react";
import Trending from "@/components/trending.jsx";

export default function Home() {
	return (
		<div className="flex flex-col gap-24">
			<Header />
			<MainPage />
		</div>
	);
}
