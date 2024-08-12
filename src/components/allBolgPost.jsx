import React from "react";
import Link from "next/link";
import TagListAPI from "@/components/tagListAPI";
import CardBlogPost from "@/components/cardBlogPost";
import {TagContext} from './tagContext'

const AllBolgPost = () => {
	return (
		<div className="flex flex-col items-center w-full">
			<div className="w-5/6">
				<h1 className=" font-extrabold text-2xl mb-5">All blog post</h1>
				<div className=" md: justify-between">
					<div className=" hidden md:flex gap-2 mb-5">
						<Link href="https://dev.to/">All</Link>

						<TagListAPI />
					</div>
					<CardBlogPost />
				</div>
			</div>
		</div>
	);
};

export default AllBolgPost;
