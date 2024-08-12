import React, { useState, useEffect } from "react";
const baseURL = "https://dev.to/api/tags?per_page=25";

const TagListAPI = () => {
	const [tags, setTags] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		const fetchTags = async () => {
			try {
				const response = await fetch(baseURL);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const json = await response.json();
				// Initialize cheker property to false for each tag
				const initializedTags = json.map((tag) => ({ ...tag, cheker: false }));
				setTags(initializedTags);
			} catch (err) {
				setError(`Fetch error: ${err.message}`);
				console.error("Fetch error:", err);
			} finally {
				setLoading(false);
			}
		};
		fetchTags();
	}, []); // Empty dependency array ensures this runs once after initial render

	// Check loading and error states
	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	const handleTagClick = (index) => {
		const updatedTags = tags.map((tag, i) =>
			i === index ? { ...tag, cheker: !tag.cheker } : tag
		);
		setTags(updatedTags);
	};

	return (
		<div className="flex gap-2">
			{tags.map((tag, index) => (
				<p
					key={tag.name}
					className="px-2 rounded-full text-center h-7"
					onClick={() => handleTagClick(index)}
					style={{
						backgroundColor: tag.cheker ? tag.bg_color_hex : "#fff",
						color: tag.cheker ? tag.text_color_hex : "#000000",
					}}
				>
					{tag.name}
				</p>
			))}
		</div>
	);
};

export default TagListAPI;
