import React from "react";
import Link from "next/link";
import TagList from "@/components/tagList"

const AllBolgPost = () => {
	return (
		<div className="flex flex-col items-center w-full">
			<div className="w-5/6">
				<h1 className=" font-extrabold text-2xl mb-5">All blog post</h1>
				<div className=" hidden md:flex justify-between">
					<div className="flex gap-2">
						<h1>All</h1>
						<TagList/>
					</div>
					
					<Link href="https://dev.to/">
					All
					</Link>
				</div>
				
			</div>
		</div>
	);
};

export default AllBolgPost;
