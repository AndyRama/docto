import { Smartphone, Stethoscope, User } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import CalendlyLogin from "@/components/CalendlyLogin"

export default function Navigation() {

	return (
		<div className="bg-gray-50">
			<header
				className="bg-[#4BB484] text-white"			
			>
				<div className="container mx-auto px-2 py-3 flex justify-between items-center">
					<Link href="/" className="flex flex-rows text-2xl lg:text-3xl xl:text-4xl font-bold">
						<Stethoscope className="h-6 w-6 mt-1 lg:mt-2 mr-2 text-[#2C4A3E] font-bold" />
						Cabinet Medical
					</Link>
					<div className="flex items-center gap-4">
						<Link href="/help" className="text-sm hover:underline items-center gap-1 hidden md:contents">
							<User className="h-4 w-4 hidden md:contents" />
							En cas d'urgence
						</Link>
						{/* <CalendlyLogin/> */}
						<div className="flex space-x-4">

							<Link 
								href="/appointments" 
								className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 bg-gray-50"
							>
								Mes rendez-vous
							</Link>
						</div>
					</div>
				</div>
			</header>
			
	  </div>
	)
}