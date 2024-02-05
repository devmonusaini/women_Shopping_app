import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
	const [startIdx, setStartIdx] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState();

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 400) {
				setItemsPerPage(3);
			} else if (window.innerWidth <= 600) {
				setItemsPerPage(4);
			} else if (window.innerWidth <= 768) {
				setItemsPerPage(5);
			} else if (window.innerWidth <= 1020) {
				setItemsPerPage(6);
			} else if (window.innerWidth <= 1200) {
				setItemsPerPage(7);
			} else {
				setItemsPerPage(8);
			}
		};

		// Set initial itemsPerPage
		handleResize();

		// Attach the event listener for window resize
		window.addEventListener("resize", handleResize);

		// Cleanup the event listener on component unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Use the conditional operator to assign the correct number of slides per page
	const currentSlides = slides.slice(startIdx, startIdx + itemsPerPage);

	const totalSlides = slides.length;
	const totalPages = Math.ceil(totalSlides / itemsPerPage);

	const nextSlide = () => {
		setStartIdx((prevStartIdx) =>
			prevStartIdx + 1 <= totalSlides - itemsPerPage ? prevStartIdx + 1 : 0
		);
	};

	const prevSlide = () => {
		setStartIdx((prevStartIdx) =>
			prevStartIdx - 1 >= 0 ? prevStartIdx - 1 : totalSlides - itemsPerPage
		);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<div className="px-2">
			<section className="max-w-[1400px] sm:h-72 h-48 grid grid-cols-1  mx-auto overflow-hidden  sm:p-10  p-6 relative ">
				<FaArrowAltCircleLeft
					className="absolute sm:top-[45%] top-[40%] left-0  text-2xl text-black z-[10] cursor-pointer user-select-none"
					onClick={prevSlide}
				/>
				<div className="max-w-[1400px] flex justify-center items-center flex-row mx-auto overflow-hidden">
					{currentSlides.map((slide, index) => (
						<div className="flex justify-center  items-center flex-col">
							<div
								className={`slide sm:w-36 sm:h-36 w-24 h-24 sm:mx-2 mx-1 rounded-full  slider-wrapper  hover:scale-110 duration-500`}
								key={startIdx + index}
							>
								<div className="w-full h-full rounded-full overflow-hidden">
									<img
										src={slide.image}
										alt={`slide ${startIdx + index}`}
										className="rounded-full w-full "
									/>
								</div>
							</div>
							<div className="sm:text-medium text-xs my-2 font-light  lato-regular ">
								{slide.name}
							</div>
						</div>
					))}
				</div>
				<FaArrowAltCircleRight
					className="absolute sm:top-[45%] top-[40%] right-0  text-2xl text-black z-[10] cursor-pointer user-select-none"
					onClick={nextSlide}
				/>
			</section>
		</div>
	);
};

export default ImageSlider;
