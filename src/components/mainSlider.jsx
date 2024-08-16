import Link from "next/link";
import React from "react";
const baseURL = "https://dev.to/api/articles?&per_page=4&top=4";
const MainSlider = () => {
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
		}

		fetchArticles();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error!</div>;

	return (
		<div className="hidden md:flex w-full justify-center ">
			<div className=" w-5/6 flex overflow-hidden">
				{articles.map((article) => (
					<div className="min-w-full n">
						<Link
							className="w-full relative"
							key={article.id}
							href={`/articles/${article.id}`}
						>
							<div
								className="relative bg-cover bg-center bg-no-repeat p-8 h-[800px] w-full rounded-3xl"
								style={{ backgroundImage: `url(${article.cover_image})` }}
							>
								<div className="absolute bottom-2 left-2 rounded-md bg-white  h-max w-1/3  m-4 ">
									<div className=" m-10 flex flex-col gap-4">
										<p>
											{article.tag_list.map((tag) => (
												<span className=" bg-indigo-700 w-max border py-2 px-4 text-white text-sm font-medium rounded-xl ">
													{tag}{" "}
												</span>
											))}
										</p>
										<h1 className=" text-4xl font-bold text-gray-900">
											{article.title}
										</h1>
									</div>

									<p className=" m-10">{article.readable_publish_date}</p>
								</div>
							</div>
						</Link>
					</div>
				))}
				<div className="felx  w-full ">
					<h1 className=""></h1>
				</div>
			</div>
		</div>
	);
};
export default MainSlider;
