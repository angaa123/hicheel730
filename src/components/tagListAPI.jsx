import React, { useState, useEffect } from "react";
import { TagContext } from './tagContext';
import CardBlogPost from "./cardBlogPost";

const baseURL = "https://dev.to/api/tags?per_page=25";

const TagListAPI = () => {
	const [tags, setTags] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [tagListValue, setTagListValue] = useState([]);
	let a= []
	useEffect(() => {
		const fetchTags = async () => {
			try {
				const response = await fetch(baseURL);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const json = await response.json();
				// Initialize checker property to false for each tag
				const initializedTags = json.map((tag) => ({ ...tag, checker: false }));
				setTags(initializedTags);
			} catch (err) {
				setError(`Fetch error: ${err.message}`);
				console.error("Fetch error:", err);
			} finally {
				setLoading(false);
			}
		};
		fetchTags();
	}, []); // Empty dependency array ensures this runs once after the initial render

	// Check loading and error states
	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	const handleTagClick = (index) => {
		const updatedTags = tags.map((tag, i) => {
			if (i === index) {
				const updatedTag = { ...tag, checker: !tag.checker };
				if (updatedTag.checker) {
					if (!tagListValue.includes(updatedTag.name)) {
						setTagListValue([...tagListValue, updatedTag.name]);
						
					}
				} else {
					setTagListValue(tagListValue.filter(name => name !== updatedTag.name));
				}
				
				return updatedTag;
			}
			return tag;
		});
		
		setTags(updatedTags);
	};

	return (
		<div className="flex flex-col gap-2">
			<div className="flex">{tags.map((tag, index) => (
				<p
					key={tag.name}
					className="px-2 rounded-full text-center h-7"
					onClick={() => handleTagClick(index)}
					style={{
						backgroundColor: tag.checker ? tag.bg_color_hex : "#fff",
						color: tag.checker ? tag.text_color_hex : "#000000",
					}}
				>
					{tag.name}
				</p>
			))}</div>
			
			<TagContext.Provider value={tagListValue}>
			<CardBlogPost />
			</TagContext.Provider>
		</div>
	);
};

export default TagListAPI;
