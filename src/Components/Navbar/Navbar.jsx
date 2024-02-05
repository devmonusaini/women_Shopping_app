import React from "react";
import logo from "../../Images/logo.avif";
import logo2 from "../../Images/logo2.webp";
import locationTrack from "../../Images/locationTrack.png";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
const Navbar = ({ handleInputChange, query }) => {
	const [toggle, setToggle] = useState(false);
	const [searchToggle, setSearchToggle] = useState();

	return (
		<>
			<div className="z-40   fixed  top-0 left-0  h-fit w-screen bg-white">
				<header style={{ backgroundcolor: "transparent" }}>
					<nav className="mx-auto flex items-center justify-center flex-col gap-x-6 p-3 py-4 max-w-[1500px] lg:px-8">
						<div className="w-full flex justify-between items-center flex-row ">
							<div className="flex justify-center items-center flex-row ">
								<div className="flex lg:hidden mr-2">
									<button
										className=" inline-flex items-center justify-center rounded-md  text-black"
										onClick={() => {
											setToggle(!toggle);
										}}
									>
										<span className="sr-only">Open main menu</span>
										<span className="w-fit text-xl text-gray-400">
											<HiOutlineBars3 />
										</span>
									</button>
								</div>
								<img
									alt="images"
									className="w-4 h-4 rounded-[500px ] border-solid border-1 "
									src={locationTrack}
								/>
								<span className="uppercase tracking-[3px] text-[10px] ml-3 md:block hidden">
									Track Order
								</span>
							</div>
							<div className="flex">
								<a
									to="/"
									className="-m-1.5 p-1.5 text-black flex justify-center items-center "
								>
									<span className="sr-only">Your Company</span>
									<img
										alt="images"
										className="w-[80px] h-[44px] rounded-[500px ] border-solid border-1  block md:hidden"
										src={logo}
									/>
									<img
										alt="images"
										className="w-[200px] h-[68px] rounded-[500px ] border-solid border-1  md:block hidden"
										src={logo2}
									/>
								</a>
							</div>
							<div className="flex jusitfy-between items-center flex-row  md:relative">
								<Link to="/contact">
									<button className=" sm:ml-4 ml-2 text-gray-500 text-xl md:block hidden">
										<CiUser />
									</button>
								</Link>
								<button className="sm:ml-4 ml-2 text-gray-500 text-xl">
									<CiHeart />
								</button>
								<button
									className="sm:ml-4 ml-2 text-gray-500 text-xl md:relative top-0 left-0"
									onClick={() => setSearchToggle(!searchToggle)}
								>
									<CiSearch />
								</button>
								{searchToggle && (
									<div className="absolute top-0 md:left-[-180px] left-0 md:bg-white bg-white/90 md:h-12 h-screen md:w-[300px] w-screen  flex md:justify-between justify-center  item-center border border-gray shadow-xl rounded-xl  ">
										<div className="w-[80%] h-full flex justify-center items-center  ">
											<input
												type="text "
												onChange={handleInputChange}
												value={query}
												placeholder="Enter your search dresses."
												className="bg-transparent w-full md:shadow-none   md:h-full h-12 md:border-none border border-l-white border-r-white border-t-white  border-b-black text-black p-2 outline-none "
											/>
										</div>

										<div className="w-[10%] flex justify-center items-center h-full ">
											<IoMdClose
												onClick={() => setSearchToggle(!searchToggle)}
												size={30}
												className=" cursor-pointer text-gray-400 w-full h-full"
											/>
										</div>
									</div>
								)}
								<button className="sm:ml-8 ml-2 text-gray-500 text-xl">
									<IoBagOutline />
								</button>
							</div>
						</div>
						{/* <div className="lg:flex hidden  justify-between items-center flex-row h-fit my-5 flex-wrap gap-y-4">
							<div className="gap-x-6 flex justify-center items-center xl:gap-x-12">
								<a
									to="/newNFT"
									className="text-black font-light text-md  cursor-pointer uppercase linkStyle lato-regular tracking-[2px] "
								>
									Shop Women
								</a>
								<a
									to="/followers"
									className="text-black  text-md  font-light cursor-pointer uppercase  linkStyle lato-regular tracking-[2px]"
								>
									Shop men
								</a>
								<a
									to="/newNFT"
									className="text-black font-light text-md  cursor-pointer uppercase linkStyle lato-regular tracking-[2px] "
								>
									Special Prices
								</a>
								<a
									to="/followers"
									className="text-black  text-md  font-light cursor-pointer uppercase linkStyle lato-regular tracking-[2px] "
								>
									celebrities
								</a>
								<a
									to="/newNFT"
									className="text-black font-light text-md  cursor-pointer uppercase linkStyle lato-regular tracking-[2px] "
								>
									Return / exchange
								</a>
								<a
									to="/followers"
									className="text-black  text-md  font-light cursor-pointer uppercase linkStyle lato-regular tracking-[2px] "
								>
									Contect
								</a>
							</div>
						</div> */}
					</nav>
					{toggle ? (
						<div className="bg-white/80 fixed w-full h-screen z-10 top-0 left-0 lg:hidden block"></div>
					) : (
						""
					)}

					{/* Side drawer menu */}
					<div
						className={
							toggle
								? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 lg:hidden block"
								: "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 lg:hidden block"
						}
					>
						<div
							className={
								toggle
									? "flex  w-[300px] fixed top-0 left-0 shadow shadow-xl block"
									: "flex  w-[300px] fixed top-0 left-0 shadow shadow-xl hidden"
							}
						>
							<a
								to="/"
								className="-m-1.5 p-1.5 text-black flex justify-center items-center p-4 "
							>
								<span className="sr-only">Your Company</span>
								<img
									alt="images"
									className="w-[80px] h-[44px] rounded-[500px ] border-solid border-1  block md:hidden"
									src={logo}
								/>
							</a>
							<IoMdClose
								onClick={() => setToggle(!toggle)}
								size={30}
								className="absolute right-4 top-4 cursor-pointer"
							/>
						</div>

						<nav>
							<ul className="flex flex-col p-4 text-gray-800 mt-16">
								<li className="text-xl py-4 flex border border-b-black border-t-white border-l-white border-r-white">
									{" "}
									Shop Women
								</li>
								<li className="text-xl py-4 flex border border-b-black border-t-white border-l-white border-r-white">
									{" "}
									Shop men
								</li>

								<li className="text-xl py-4 flex border border-b-black border-t-white border-l-white border-r-white">
									Special Prices
								</li>
								<li className="text-xl py-4 flex border border-b-black border-t-white border-l-white border-r-white">
									celebrities
								</li>
								<li className="text-xl py-4 flex border border-b-black border-t-white border-l-white border-r-white">
									{" "}
									Return / exchange
								</li>
								<li className="text-xl py-4 flex border border-b-black border-t-white border-l-white border-r-white">
									{" "}
									Contect
								</li>
							</ul>
						</nav>
					</div>
				</header>
			</div>
		</>
	);
};

export default Navbar;
