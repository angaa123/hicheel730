import Link from "next/link";
import React from "react";
const mockImg =
	"https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7UvFitaCT~CzZ5DqyKpCUoCHGwheEv9NNQTzNAOO9CTpKhBNgqDw1hKKxE-rchvhmoiPCedKAjkn93IifesRTTGVeaRptLzbbfDNffKbYju9Eka9JYFz22tod0-GwbzO205dw9x5TjvZ7X0vzMl28u8GkII6K7980NMnN0NV8zSFhiJtj9A8RqwUvaHc7LWgH1AjJTpFKG~NeQeP5CQGnxEsZm~KfMQBMFLVA7qEvajjG~6b8JuJrawqM2Gj~m3~MgcYkwzjkRQUO1bER~ug~Oa5zxgKghSkR2b0X92zH2kYUwBG4Q2hwxQ6piJv5nhtSVLdny6zvck3wMnYU68zg__";

const MainSlider = () => {
	return (
		<div className="hidden md:flex md:w-5/6">
			<div className="relative w-full">
				<div
					className="relative bg-cover bg-center bg-no-repeat p-8 text-white h-screen"
					style={{ backgroundImage: `url(${mockImg})` }}
				>
					<div className="absolute bottom-2 left-2 rounded-md bg-slate-600 z-10 h-1/2 w-1/3 p-4">
						<p className=" bg-indigo-700 ">Technology</p>
						<h1>Grid system for better Design User Interface</h1>
						<p>date</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MainSlider;
