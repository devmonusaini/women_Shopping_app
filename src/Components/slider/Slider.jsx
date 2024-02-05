import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import webPage from "../../Images/final_web_collection_page_banners_1400_x_200px_b4b2a175-08cd-47e0-81b9-03819b13d391.webp";
import React from "react";
import { FaHandHoldingHand } from "react-icons/fa6";
import logo1 from "../../Images/exchange.webp";
import logo2 from "../../Images/cash.webp";
import logo3 from "../../Images/network.webp";

const Slider = () => {
	return (
		<>
			<div className="w-screen h-fit lg:mt-[160px]  md:mt-[100px] mt-[70px] ">
				<div className="w-full  bg-[#52A09E] flex justify-center items-center ">
					<div className="grid sm:grid-cols-3 grid-cols-2 max-w-[600px] sm:p-7 p-3  sm:gap-4 gap-2 lato-regular ">
						<div className="text-white sm:text-sm text-xs flex justify-center items-center flex-row">
							<img
								src={logo1}
								className="sm:mr-3 mr-2 sm:w-10 w-6 inline-block"
							/>
							Free Return/ Exchanges
						</div>
						<div className="text-white sm:text-sm text-xs flex justify-center items-center flex-row">
							<img
								src={logo3}
								className="sm:mr-3 mr-2 sm:w-10 w-6 inline-block"
							/>
							Free International Shipping Over $120
						</div>
						<div className="text-white sm:text-sm text-xs flex justify-center items-center flex-row sm:block hidden">
							<img
								src={logo2}
								className="sm:mr-3 mr-2 sm:w-10 w-6 inline-block"
							/>
							Cash On Delivery
						</div>
					</div>
				</div>
				<div className="w-full mx-auto flex justify-center items-center flex-col">
					<h6 className=" text-xs mt-5 lato-regular">
						<a href="" className="mx-1 ">
							Home{" "}
						</a>{" "}
						/{" "}
						<a href=" " className="mx-1 ">
							Collections
						</a>{" "}
						/
					</h6>
					<h1 className="text-3xl mt-3 font-light lato-regular">
						Women- All Products{" "}
					</h1>
				</div>

				<ImageSlider slides={SliderData} />
				<div className="w-[100vw]  mt-0">
					<img className="w-full min-h-[100px]" src={webPage} />
				</div>
			</div>
		</>
	);
};

export default Slider;
