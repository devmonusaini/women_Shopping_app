import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = ({
	id,
	img,
	title,
	star,
	reviews,
	prevPrice,
	newPrice,
	color,
}) => {
	// const [data, setData] = useState(props.data);
	const [percentage, setPercentage] = useState();
	const customColor = color;
	const style = {
		backgroundColor: customColor,
	};
	useEffect(() => {
		const oldPrice = parseInt(prevPrice);
		const updatePrice = parseInt(newPrice);
		const sub = oldPrice - updatePrice;
		const result = parseInt((sub * 100) / oldPrice);

		setPercentage(result);
	}, []);

	const navigate = useNavigate();
	return (
		<>
			<Link
				to={`/product-details/${id}`}
				onClick={() => {
					navigate(`/product-details/${id}`);
					window.scrollTo(0, 0);
				}}
			>
				<div className="container  w-full flex justify-center items-center flex-col">
					<div className="image-box  relative top-0 left-0 w-full h-full relative ">
						<img src={img} alt={title} className="w-full h-full" />
						<div className="px-6 p-2 text-white font-normal  bg-[#52A09E] lato-regular absolute top-0 right-0">
							Sell
						</div>
					</div>
					<div className="flex justify-center items-center flex-col p-4">
						<h2 className="lato-regular  text-sm  w-full  text-center  ">
							{title}
						</h2>
						<div className="flex jusitfy-center items-cente flex-row my-2 ">
							{star}
							{star}
							{star}
							{star}
							{star}
							<span className="inline-block mx-2 text-sm">[{reviews}]</span>
						</div>
						<div className="lato-regular text-sm flex-wrap">
							<del className="text-black/50 mx-3">Rs. {prevPrice} </del>
							Rs. {newPrice}
							<span className=" text-[#52A09E] mx-3">Save {percentage}%</span>
						</div>
						<div className="w-6 h-6 my-2 border border-black rounded-full p-1">
							<div className="w-full h-full  rounded-full " style={style}></div>
						</div>
						<div className="flex flex-row justify-center items-center flex-wrap gap-y-2">
							<button className="border border-black/20 px-1 mr-1 flex jusitfy-center items-center  text-xs">
								XXS
							</button>
							<button className="border border-black/20 px-1 mr-1 flex jusitfy-center items-center  text-xs">
								XS
							</button>
							<button className="border border-black/20 px-1 mr-1 flex jusitfy-center items-center  text-xs">
								S
							</button>
							<button className="border border-black/20 px-1 mr-1 flex jusitfy-center items-center  text-xs">
								M
							</button>
							<button className="border border-black/20 px-1 mr-1 flex jusitfy-center items-center  text-xs">
								L
							</button>
							<button className="border border-black/20 px-1 mr-1 flex jusitfy-center items-center  text-xs">
								XL
							</button>
							<button className="border border-black/20 px-1 mr-1 flex jusitfy-center items-center  text-xs">
								XXL
							</button>
							<button className="border border-black/20 px-1 mr-1 flex jusitfy-center items-center  text-xs">
								3XL
							</button>
							<button className="border border-black/20 px-1 mr-1 flex jusitfy-center items-center  text-xs">
								4XL
							</button>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default Card;
