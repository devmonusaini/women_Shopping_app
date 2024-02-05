import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import products from "../../db/data";
import Card from "../../Filter/component/Card";
import Sidebar from "../../Filter/Sidebar";
import Price from "../../Filter/Price/Price";
import Navbar from "../Navbar/Navbar";
import Slider from "../slider/Slider";
import Result from "./Result";

const Products = () => {
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

export default Products;
