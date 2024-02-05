import { useState } from "react";
import Input from "../component/Input";
import "./Price.css";
import { IoChevronDownOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Price = ({ handleChange }) => {
	const [toggle, setToggle] = useState(false);
	const [selectedPriceRange, setSelectedPriceRange] = useState("");

	const handlePriceChange = (value) => {
		setSelectedPriceRange(value);
		handleChange({ target: { name: "priceRange", value } });
	};

	return (
		<>
			<h2 className="text-[22px] font-normal  w-full flex justify-between items-center  p-4">
				Price
				<button
					onClick={() => {
						setToggle(!toggle);
					}}
				>
					{toggle ? (
						<IoChevronDownOutline className="text-sm" />
					) : (
						<MdOutlineKeyboardArrowUp className="text-sm" />
					)}
				</button>
			</h2>
			<div
				className={`w-full sm:h-[240px] h-[180px] overflow-y-auto border-2 border-b-gray border-l-white border-r-white border-t-white px-4 ${
					toggle === true ? "block " : "hidden"
				}`}
			>
				<label className="sidebar-label-container">
					<input
						onChange={() => handlePriceChange("")}
						type="radio"
						value=""
						name="priceRange"
						checked={selectedPriceRange === ""}
					/>
					<span className="checkmark"></span>All
				</label>

				<Input
					handleChange={() => handlePriceChange("0-2000")}
					title="0 - 2000"
					name="priceRange"
					checked={selectedPriceRange === "0-2000"}
				/>

				<Input
					handleChange={() => handlePriceChange("2000-3000")}
					title="2000 - 3000"
					name="priceRange"
					checked={selectedPriceRange === "2000-3000"}
				/>

				<Input
					handleChange={() => handlePriceChange("3000-4000")}
					title="3000 - 4000"
					name="priceRange"
					checked={selectedPriceRange === "3000-4000"}
				/>

				<Input
					handleChange={() => handlePriceChange("4000-5000")}
					title="Over 4000"
					name="priceRange"
					checked={selectedPriceRange === "4000-5000"}
				/>
			</div>
		</>
	);
};

export default Price;
