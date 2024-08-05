import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";

function Header() {
	return (
		<header className=" m-5 flex justify-between items-center md:w-5/6 md:mx-auto ">
			<img src="/img/logo.png" alt="Logo" className="h-6 w-auto" />
			<IoMenu className="text-2xl md:hidden"></IoMenu>
			<div className=" hidden md:flex md:items-center md:space-x-10">
				<Link href="">Home</Link>
				<Link href="">Blog</Link>
				<Link href="">Contact</Link>
			</div>
			<div className=" hidden md:flex md:items-center border bg-gray-200 rounded-xl py-2 px-4">
				<input
					type="text"
					className=" outline-none bg-none bg-gray-200"
					placeholder="Search..."
				/>
				<IoMdSearch className=" text-gray-600" />
			</div>
		</header>
	);
}

export default Header;
