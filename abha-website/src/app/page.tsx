
import hospital from "@/public/hospital.svg";
import Link  from "next/link";
import Image from "next/image";
import LoginPage from "./(auth)/login/page";

export default function Home() {
	return (
	<>
	<section className=" flex flex-col-reverse justify-center md:flex-row items-center gap-8 mb-12 p-6 ">
			<div className=" gap-2 flex flex-col">
				<h1 className=" max-w-md  text-2xl font-bold sm:text-4xl md:text-left text-slate-900 ">Create Ayushman Bharat Health Account - ABHA Number</h1>
				<h3 className=" max-w-md   font-semibold text-2xl sm:text:3xl md:text-left text-slate-900">Creating India's Digital Health Mission</h3>
				<p className="  max-w-md  text-slate-500 md:text-left text-lg font-[500]">ABHA - Ayushman Bharat Health Account - Key to your digital healthcare journey.</p>
			     <div >

				<button className="bg-primary   text-white font-bold py-2 px-4 rounded items-start mx-auto">Create ABHA number</button>
			     </div>
			    
			     <p className=" max-w-md  text-slate-800 md:text-left text-lg ">Already have ABHA number? <span className="text-blue-500"><Link href="/login">Login</Link></span></p>
                  </div>
			<div className="w-1/2 aspect-[1075/738] ">
			<Image src={hospital} alt="hospital"  className="object-cover object-center" />
			</div>
                       
		</section>
		<section className=" bg-primary mb-10 gap-4 ">
			<div className="flex flex-col justify-center items-center ">
				<h1 className="text-4xl font-bold text-white item-center mt-5">Benefits of ABHA Number</h1>
				<p className="text-white text[400] m-4 text[4xl] text-center">ABHA number is a 14 digit number that will uniquely identify you as a participant in India's digital healthcare ecosystem. ABHA number will establish a strong and trustable identity for you that will be accepted by healthcare providers across the country. Seamless sign up for PHR (Personal Health Records) applications such as ABDM ABHA application for Health data sharing.</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4 ">
				<div className=" border-none gap-4 rounded-xl flex flex-col items-center justify-center bg-white mb-4 ml-1 p-4">
					<img  className="" src="https://abha.abdm.gov.in/abha/v3/cff41e02e2da93ba94610a0528c29968.svg" alt="" />
					<h1 className="text[400]  ">Unique & Trustable Identity</h1>
					<p className="text-slate-400 text-center">Establish unique identity across different healthcare providers within the healthcare ecosystem</p>
				</div>
				<div className=" border-none gap-4 rounded-xl flex flex-col items-center justify-center bg-white mb-4 ml-4 p-4 ">
					<img  className="" src="https://abha.abdm.gov.in/abha/v3/cff41e02e2da93ba94610a0528c29968.svg" alt="" />
					<h1 className="text[400] ">Unique & Trustable Identity</h1>
					<p className="text-slate-400 text-center">Establish unique identity across different healthcare providers within the healthcare ecosystem</p>
				</div>
				<div className=" border-none gap-4  rounded-xl flex flex-col items-center justify-center bg-white mb-4 ml-4 p-4">
					<img  className="" src="https://abha.abdm.gov.in/abha/v3/167e1eaa40a7bda4354a7ff807c42ee6.svg" alt="" />
					<h1 className="text[400] ">Unique & Trustable Identity</h1>
					<p className="text-slate-400 text-center">Establish unique identity across different healthcare providers within the healthcare ecosystem</p>
				</div>
				<div className=" border-none gap-4 rounded-xl flex flex-col items-center justify-center bg-white mb-4 ml-4 p-4">
					<img  className="" src="https://abha.abdm.gov.in/abha/v3/af6a10211e3a50b5f5cd0cf2903a0731.svg" alt="" />
					<h1 className="text[400] ">Unique & Trustable Identity</h1>
					<p className="text-slate-400 text-center">Establish unique identity across different healthcare providers within the healthcare ecosystem</p>
				</div>

			</div>

		</section></>
	)	
}
