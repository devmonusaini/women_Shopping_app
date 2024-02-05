import "./Category.css";
import Input from "../component/Input";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

function Category({ handleChange }) {
	const [toggle, setToggle] = useState(true);
	return (
		<div className="w-full">
			<h2 className="text-[22px] font-normal mb-[20px] w-full flex justify-between items-center pr-4">
				Category
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
					<input onChange={handleChange} type="radio" value="" name="test" />
					<span className="checkmark"></span>All
				</label>
				<Input
					handleChange={handleChange}
					value="Anarkali"
					title="Anarkali"
					name="test"
				/>
				<Input
					handleChange={handleChange}
					value="Angrakha"
					title="Angrakha"
					name="test"
				/>
				<Input
					handleChange={handleChange}
					value="Bottomwear"
					title="Bottomwear"
					name="test"
				/>
				<Input
					handleChange={handleChange}
					value="Cat:kurtas"
					title="Cat:kurtas"
					name="test"
				/>
				<Input
					handleChange={handleChange}
					value="CO-Ords"
					title="CO-Ords"
					name="test"
				/>
				<Input
					handleChange={handleChange}
					value="Dresses"
					title="Dresses"
					name="test"
				/>
				<Input
					handleChange={handleChange}
					value="Dupattas"
					title="Dupattas"
					name="test"
				/>
				<Input
					handleChange={handleChange}
					value="Grown"
					title="Grown"
					name="test"
				/>
				<Input
					handleChange={handleChange}
					value="Kaftans"
					title="Kaftans"
					name="test"
				/>
				<Input
					handleChange={handleChange}
					value="Kaftans"
					title="Kaftans"
					name="test"
				/>
				<Input
					handleChange={handleChange}
					value="shirt"
					title="shirt"
					name="test"
				/>
				<Input
					handleChange={handleChange}
					value="short-kurtas"
					title="short-kurtas"
					name="test"
				/>
			</div>
		</div>
	);
}

export default Category;
