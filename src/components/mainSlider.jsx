import Link from "next/link";
import React from "react";
const mockImg =
	"https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7UvFitaCT~CzZ5DqyKpCUoCHGwheEv9NNQTzNAOO9CTpKhBNgqDw1hKKxE-rchvhmoiPCedKAjkn93IifesRTTGVeaRptLzbbfDNffKbYju9Eka9JYFz22tod0-GwbzO205dw9x5TjvZ7X0vzMl28u8GkII6K7980NMnN0NV8zSFhiJtj9A8RqwUvaHc7LWgH1AjJTpFKG~NeQeP5CQGnxEsZm~KfMQBMFLVA7qEvajjG~6b8JuJrawqM2Gj~m3~MgcYkwzjkRQUO1bER~ug~Oa5zxgKghSkR2b0X92zH2kYUwBG4Q2hwxQ6piJv5nhtSVLdny6zvck3wMnYU68zg__";

const MainSlider = () => {
	return (
		<div className="hidden md:flex w-full justify-center ">
			<div className="relative w-5/6 ">
				<div
					className="relative bg-cover bg-center bg-no-repeat p-8 h-[800px] w-full rounded-3xl"
					style={{ backgroundImage: `url(${mockImg})` }}
				>
					<div className="absolute bottom-2 left-2 rounded-md bg-white  h-max w-1/3  m-4 ">
						<div className=" m-10 flex flex-col gap-4">
							<p className=" bg-indigo-700 w-max border py-2 px-4 text-white text-sm font-medium rounded-xl">
								Technology
							</p>
							<h1 className=" text-4xl font-bold text-gray-900">
								Grid system for better Design User Interface
							</h1>
						</div>

						<p className=" m-10">August 20, 2022</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MainSlider;
