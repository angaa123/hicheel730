import React from "react";
import Link from "next/link";
const baseURL = "https://dev.to/api/articles?&per_page=4&top=4";
function ArticleList() {
	const [articles, setArticles] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);
	React.useEffect(() => {
		async function fetchArticles() {
			try {
				const response = await fetch(baseURL);
				console.log(response);
				const json = await response.json();
				console.log(json);
				setArticles(json);
			} catch (error) {
				console.log(error);
				setError(true);
			}
			setLoading(false);
			console.log(articles);
		}
		fetchArticles();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error!</div>;
	return (
		<div>
			<ul className="cardContainer flex flex-col  gap-5 md:flex-row items-center md:justify-between md:w-full">
				{articles.slice(0, 4).map((article) => (
					<li key={article.id} className="md:w-full">
						<Link href={article.url} className="md:w-3/12">
							<div
								className="relative h-96 w-full bg-no-repeat bg-cover bg-center rounded-2xl p-7"
								style={{
									backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.001), black 120%),url(${article.cover_image})`,
								}}
							>
								<div className="absolute bottom-2">
									<div className="flex">
										{article.tag_list.map((tag) => (
											<p className="bg-indigo-700 w-max py-2 px-4 text-white text-sm font-medium rounded-xl mb-4">
												{tag}
											</p>
										))}
									</div>

									<h1 className="text-white text-2xl font-extrabold">
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
export default ArticleList;
