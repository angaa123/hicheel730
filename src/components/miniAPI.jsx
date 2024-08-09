import React from "react";
import Link from "next/link";
const baseURL = "https://dev.to/api/articles";
function DevToAPI() {
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
			<ul className="cardContainer flex flex-col md:flex-row items-center gap-3">
				{articles.slice(0, 4).map((article) => (
					<li key={article.id}>
						<Link href={article.url}>
							<div
								className="relative h-96 w-80 bg-no-repeat bg-cover bg-center rounded-2xl p-7"
								style={{
									backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.001), black 120%),url(${article.cover_image})`,
								}}
							>
								<div className="absolute bottom-2">
									<p className="bg-indigo-700 w-max py-2 px-4 text-white text-sm font-medium rounded-xl mb-4">
										Technology
									</p>
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
export default DevToAPI;
