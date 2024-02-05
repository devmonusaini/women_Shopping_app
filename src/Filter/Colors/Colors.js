import "./Colors.css";
import Input from "../component/Input";
import { IoChevronDownOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
const Colors = ({ handleChange }) => {
	const [toggle, setToggle] = useState();
	return (
		<>
			<h2 className="text-[22px] font-normal  w-full flex justify-between items-center pr-4 mt-4">
				Color
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
				className={`w-full sm:h-[240px] h-[180px] overflow-y-auto border-2 border-b-gray border-l-white border-r-white border-t-white ${
					toggle === true ? "block " : "hidden"
				}`}
			>
				<label className="sidebar-label-container">
					<input onChange={handleChange} type="radio" value="" name="test1" />
					<span className="checkmark all"></span>
					All
				</label>

				<Input
					handleChange={handleChange}
					value="black"
					title="Black"
					name="test1"
					color="black"
				/>

				<Input
					handleChange={handleChange}
					value="blue"
					title="Blue"
					name="test1"
					color="blue"
				/>

				<Input
					handleChange={handleChange}
					value="red"
					title="Red"
					name="test1"
					color="red"
				/>

				<Input
					handleChange={handleChange}
					value="green"
					title="Green"
					name="test1"
					color="green"
				/>

				<Input
					handleChange={handleChange}
					value="green"
					title="Green"
					name="test1"
					color="green"
				/>
				<Input
					handleChange={handleChange}
					value="gray"
					title="Gray"
					name="test1"
					color="gray"
				/>

				<label className="sidebar-label-container">
					<input
						onChange={handleChange}
						type="radio"
						value="white"
						name="test1"
					/>
					<span
						className="checkmark"
						style={{ background: "white", border: "2px solid black" }}
					></span>
					White
				</label>
			</div>
		</>
	);
};

export default Colors;
