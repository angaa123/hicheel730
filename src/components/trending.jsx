import React from "react";
import ArticleLIst from "@/components/articleList";

const Trending = () => {
	return (
		<div className="flex flex-col items-center w-full">
			<div className="w-5/6">
				<h1 className=" font-extrabold text-4xl mb-5">Trending</h1>
				<ArticleLIst></ArticleLIst>
			</div>
		</div>
	);
};

export default Trending;
