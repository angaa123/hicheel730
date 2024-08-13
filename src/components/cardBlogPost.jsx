import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { TagContext } from "./tagContext";
// const baseURL = "https://dev.to/api/articles";
const baseURLWithTags = (tags) =>
	`https://dev.to/api/articles?tag=${tags.map((tag) => tag).join(", ")}`;

function CardBlogPost() {
	const tags = useContext(TagContext); // tags is array of string
	const [articles, setArticles] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);
	React.useEffect(() => {
		async function fetchArticles() {
			try {
				const url = baseURLWithTags(tags);
				const response = await fetch(url);
				const json = await response.json();
				setArticles(json);
				console.log(baseURLWithTags);
			} catch (error) {
				console.log(error);
				setError(true);
			}
			setLoading(false);
		}
		fetchArticles();
	}, [tags]); // Re-run when tags change
	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error!</div>;
	return (
		<div>
			<ul className="cardContainer cardContainer flex flex-col flex-wrap gap-y-5 gap-5 md:flex-row items-center md:justify-between md:w-full ">
				{articles.map((article) => (
					<li key={article.id} className=" ">
						<Link href={article.url} className="w-screen md:w-3/12 ">
							<div
								className="h-96 bg-no-repeat bg-cover bg-center rounded-2xl p-7"
								style={{
									backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.001), black 120%),url(${article.cover_image})`,
								}}
							>
								<div className="bottom-2 max-w-96 w-min min-w-60">
									<div className="flex">
										{article.tag_list.map((tag) => (
											<p
												key={tag}
												className="bg-indigo-700 w-max py-1 px-2 text-white text-sm font-medium rounded-xl mb-4"
											>
												{tag}
											</p>
										))}
									</div>

									<h1 className="text-white text-xl md:text-2xl font-extrabold ">
										{article.title}
									</h1>
								</div>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default CardBlogPost;
