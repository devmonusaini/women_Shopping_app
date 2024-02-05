import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
	return (
		<div className="flex justify-center items-center w-screen h-screen p-5">
			<div className="w-[400px]  flex justify-center items-center flex-col">
				<h1 className="w-full text-2xl text-center font-normal my-10">Login</h1>
				<form className="w-full" action="">
					<div className=" w-full  flex justify-start items-start flex-col my-5">
						<label className="font-light text-sm">Email</label>
						<input
							type="email"
							required
							placeholder="enter your email"
							className=" w-full text-sm outline-none font-normal tracking-[2px] capitalize p-3 border-2 border-gray text-black font-sans w-full text-start mt-3 flex justify-start items-end"
						/>
					</div>
					<div className="w-full  flex justify-start items-start flex-col">
						<div className="w-full flex justify-between items-center  capitalize">
							<label className="font-light text-sm">Email</label>
							<button className=" capitalize font-light text-sm">
								forgot password
							</button>
						</div>
						<input
							type="password"
							placeholder="enter your password"
							required
							className="w-full  text-sm outline-none font-normal tracking-[2px] capitalize p-3 border-2 border-gray text-black font-sans w-full text-start mt-3 flex justify-start items-end"
						/>
					</div>
					<button
						type="submite"
						className="text-sm uppercase  bg-[#52A09E] border border-[#52A09E] hover:opacity-80 text-center    font-bold tracking-[2px]  text-white font-sans w-full my-5 p-3"
					>
						sign in
					</button>
					<div className="w-full text-center ">
						<button className="w-fit  text-sm  font-normal tracking-[2px] capitalize p-3  text-black font-sans    ">
							create Account
						</button>
					</div>
					<div className="w-full flex justify-center items-center flex-col">
						<button className="w-[60%]  text-sm outline-none font-normal tracking-[2px] capitalize p-2 border-2 border-gray text-black font-sans w-full text-center mt-3 ">
							<FaFacebook className="text-blue-500 text-2xl mx-2 inline-block" />{" "}
							sign in facebook
						</button>
						<button className="w-[60%]  text-sm outline-none font-normal tracking-[2px] capitalize p-2 border-2 border-gray text-black font-sans w-full text-center mt-3 ">
							<FcGoogle className=" inline-block text-2xl mx-2" /> sign in
							google
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
