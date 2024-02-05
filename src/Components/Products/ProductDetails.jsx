import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { PiVanFill } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import Data from "../../db/data";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import products from "../../db/data";
import Card from "../../Filter/component/Card";
import Sidebar from "../../Filter/Sidebar";
import Price from "../../Filter/Price/Price";
import Navbar from "../Navbar/Navbar";
import Slider from "../slider/Slider";
import Result from "./Result";

const ProductDetails = () => {
	const { id } = useParams();

	const [data, setData] = useState([]);
	const [value, setValue] = useState(1);
	useEffect(() => {
		const filterType = () => {
			setData(
				Data.filter((item, index) => {
					return index + 1 === parseInt(id);
				})
			);
		};
		filterType();
	}, [id]);

	const [toggle, setToggle] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [selectedPriceRange, setSelectedPriceRange] = useState("");

	// ----------- Input Filter -----------
	const [query, setQuery] = useState("");

	const handleInputChange = (event) => {
		setQuery(event.target.value);
	};

	const filteredItems = products.filter(
		(product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
	);

	const handleChange = (event) => {
		setSelectedCategory(event.target.value);
	};

	const handlePriceChange = (event) => {
		setSelectedPriceRange(event.target.value);
	};

	function filteredData(products, selected, priceRange, query) {
		let filteredProducts = products;

		if (query) {
			filteredProducts = filteredProducts.filter(
				(product) =>
					product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
			);
		}

		if (selected) {
			filteredProducts = filteredProducts.filter(
				({ category, color, company, newPrice, title }) =>
					category === selected ||
					color === selected ||
					company === selected ||
					newPrice === selected ||
					title === selected
			);
		}

		if (priceRange) {
			const [min, max] = priceRange.split("-").map(Number);
			filteredProducts = filteredProducts.filter(
				({ newPrice }) => newPrice >= min && newPrice <= max
			);
		}

		return filteredProducts.map(
			({ id, img, title, star, reviews, prevPrice, newPrice, color }) => (
				<Card
					id={id}
					key={Math.random()}
					img={img}
					title={title}
					star={star}
					reviews={reviews}
					prevPrice={prevPrice}
					newPrice={newPrice}
					color={color}
				/>
			)
		);
	}

	const result = filteredData(
		products,
		selectedCategory,
		selectedPriceRange,
		query
	);

	return (
		<>
			<Navbar query={query} handleInputChange={handleInputChange} />
			<Slider />
			{data.map((item, index) => (
				<div className="flex justify-center items-center m-0 p-0  bg-white ">
					<div className="max-w-7xl mx-auto flex justify-center items-center  flex-col py-10 sm:py-20 xl:py-28 xl:p-0 lg:px-5 sm:px-20 px-5">
						<div className="w-full box-border lg:grid grid-cols-12 flex  flex-col justify-start items-start my-10 gap-5">
							<div className="col-span-5 py-16 w-full relative  h-full">
								<div className="flex justify-center items-start flex-col  min-h-max  w-full sticky top-0">
									<img src={item.img} />
								</div>
							</div>
							<div className="col-span-7 flex justify-center items-center flex-col  min-h-max">
								<div className="w-full flex flex-col justify-start items-center lg:mt-16 lg:px-10">
									<h1 className="text-sm font-light capitalize text-black font-sans w-full text-start my-1 ">
										Home / Collection / Women-All Products/
									</h1>
									<h1 className="text-2xl font-light capitalize text-black font-sans w-full text-start my-4">
										{item.title}
									</h1>
									<h1 className="text-2xl font-light capitalize text-black font-sans w-full text-start my-4">
										{item.star}
										{item.star}
										{item.star}
										{item.star}
										{item.star}

										<span className="inline-block mx-2 text-sm">
											[{item.reviews}]
										</span>
									</h1>
									<h1 className="text-medium font-light capitalize text-black font-sans w-full text-start my-2">
										Rs. {item.newPrice}
									</h1>
									<h1 className="text-medium font-light tracking-[2px] capitalize text-black font-sans w-full text-start my-2">
										COLOR --
										<span className="tracking-[0.5px]"> {item.color}</span>
									</h1>
									<h1 className="text-medium font-light tracking-[2px] capitalize text-black font-sans w-full text-start my-2">
										<div className="w-6 h-6 my-2 border border-black rounded-full p-1">
											<div
												className="w-full h-full  rounded-full "
												style={{ backgroundColor: item.color }}
											></div>
										</div>
									</h1>
									<h1 className="text-sm font-light tracking-[2px] capitalize text-black font-sans w-full text-start my-2">
										Size
									</h1>
									<h1 className="text-medium font-light tracking-[2px] capitalize text-black font-sans w-full text-start my-2">
										<div className="flex flex-row justify-start items-center flex-wrap gap-y-2">
											<button className="border border-black/20 p-3 mr-1 flex jusitfy-center items-center  text-xs">
												XXS
											</button>
											<button className="border border-black/20 p-3 mr-1 flex jusitfy-center items-center  text-xs">
												XS
											</button>
											<button className="border border-black/20 p-3 mr-1 flex jusitfy-center items-center  text-xs">
												S
											</button>
											<button className="border border-black/20 p-3 mr-1 flex jusitfy-center items-center  text-xs">
												M
											</button>
											<button className="border border-black/20 p-3 mr-1 flex jusitfy-center items-center  text-xs">
												L
											</button>
											<button className="border border-black/20 p-3 mr-1 flex jusitfy-center items-center  text-xs">
												XL
											</button>
											<button className="border border-black/20 p-3 mr-1 flex jusitfy-center items-center  text-xs">
												XXL
											</button>
											<button className="border border-black/20 p-3 mr-1 flex jusitfy-center items-center  text-xs">
												3XL
											</button>
											<button className="border border-black/20 p-3 mr-1 flex jusitfy-center items-center  text-xs">
												4XL
											</button>
										</div>
									</h1>
									<h1 className="text-sm font-light tracking-[2px] uppercase text-black font-sans w-full text-start my-2">
										quantity
									</h1>
									<h1 className="text-medium font-light tracking-[2px] capitalize text-black font-sans w-full text-start my-2">
										<div className="p-2 border-2 border-gray  grid grid-cols-3 w-fit text-xl font-light px-2 text-black">
											<button
												onClick={() => {
													if (value === 1) {
														setValue(1);
													} else {
														setValue(value - 1);
													}
												}}
												className="text-xl font-light px-2 text-black"
											>
												-
											</button>
											{value}
											<button
												onClick={() => {
													setValue(value + 1);
												}}
												className="text-xl font-light px-2 text-black"
											>
												+
											</button>
										</div>
									</h1>
									<button className="text-sm uppercase  text-center  border border-black  font-bold tracking-[2px]  text-black font-sans w-full my-2 p-3">
										Add To Card
									</button>
									<button className="text-sm uppercase  bg-[#52A09E] border border-[#52A09E] hover:opacity-80 text-center    font-bold tracking-[2px]  text-white font-sans w-full my-2 p-3">
										buy it now
									</button>
									<h1 className="text-medium font-normal tracking-[2px] capitalize text-black font-sans w-full text-start mt-3 flex justify-start items-end">
										<PiVanFill className="mr-2 inline-block text-3xl" />{" "}
										Delivery Option
									</h1>
									<div className="w-full flex justify-start items-start gap-2">
										<input
											type="number "
											placeholder="enter your zipcode"
											className="text-sm outline-none font-normal tracking-[2px] uppercase p-3 border-2 border-gray text-black font-sans max-w-[240px] text-start mt-3 flex justify-start items-end"
										/>
										<button className="text-sm outline-none font-normal tracking-[2px]  bg-[#52A09E]  text-white capitalize p-3 border-2 border-[#52A09E] font-sans max-w-[240px] text-start mt-3 flex justify-start items-end">
											{" "}
											Check
										</button>
									</div>
									<h1 className="text-sm font-normal bg-black/5 capitalize text-black font-sans w-full text-start mt-3 p-2 flex justify-start items-end">
										Applicable for Indian pincodes only. All International
										Orders are dispatched in 2-4 working days via DHL and take
										3-5 working days to reach after dispatch.
									</h1>
									<button className="text-sm uppercase  text-center  border border-black  font-bold tracking-[2px]  text-black font-sans w-full my-2 p-3">
										<FaRegHeart className="inline-block  text-xl mx-2" /> Add to
										wishlist
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}

			<div className="2xl:mt-20 mt-10 max-w-[1500px] mx-auto p-3">
				<div className="w-full flex justify-between items-center flex-wrap gap-5 mb-20">
					<button
						className="px-8 p-3 border border-gray-300 w-fulll h-full bg-transparent flex justify-center items-center flex-row lato-regular sm:max-w-40 w-[47%] order-1 "
						onClick={() => {
							setToggle(!toggle);
						}}
					>
						<CiFilter className="mr-2 text-gray-400" />
						Filter
					</button>

					{toggle && (
						<div className="bg-white/80 fixed w-full h-[120vh] z-50 top-0 left-0 duration-500"></div>
					)}

					<div
						className={`${
							toggle
								? "fixed top-0 left-0 w-[300px] h-[120vh] bg-white z-50 duration-500  "
								: "fixed top-0 left-[-100%] w-[300px] h-[120vh] bg-white z-10 duration-500 "
						}`}
					>
						<IoMdClose
							onClick={() => setToggle(!toggle)}
							size={30}
							className="absolute right-4 top-4 cursor-pointer"
						/>
						<h2 className="text-2xl p-4">Filter</h2>
						<div className="flex justify-start items-start flex-col w-full">
							<Sidebar handleChange={handleChange} />
							<Price handleChange={handlePriceChange} />
						</div>
					</div>

					<div className="text-sm lato-regular sm:max-w-40 w-[47%] text-center sm:order-2 order-3">
						{result.length} Products
					</div>

					{/* <div className="p-3 sm:max-w-60 w-[47%] border border-gray-300 w-fulll h-full bg-transparent flex justify-between items-center flex-row lato-regular order-2 sm:order-3">
						<span>Relevance</span>
						<IoIosArrowDown className="mr-2 text-gray-400 " />
					</div> */}
				</div>
				<Result result={result} />
			</div>
		</>
	);
};

export default ProductDetails;
