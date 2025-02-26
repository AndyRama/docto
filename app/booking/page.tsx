"use client";

import Image from "next/image";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AppointmentBooking() {
	const router = useRouter();

	useEffect(() => {
		(async function () {
			const cal = await getCalApi({ namespace: "20min-merignac" });
			cal("ui", {
				cssVarsPerTheme: {
					light: { "cal-brand": "#48ad80" },
					dark: { "cal-brand": "#fafafa" }
				},
				hideEventTypeDetails: false,
				layout: "month_view"
			});
		})();
	}, []);

	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 }
	};

	// ✅ Fonction de gestion de la sélection
	const handleSelection = (value: string) => {
		console.log("Motif sélectionné :", value);
		router.push("/booking/consultation"); // 🚀 Redirection après sélection
	};

	return (
		<>
			<Navigation />

			{/* Profile Section */}
			<motion.div
				className="bg-[#2C4A3E] text-white py-8"
				initial="hidden"
				animate="visible"
				variants={fadeIn}
				transition={{ duration: 0.5 }}
			>
				<div className="container mx-auto px-4 flex items-center gap-6">
					<div className="rounded-lg overflow-hidden w-24 h-24 bg-white">
						<Image src="/placeholder.jpg" alt="Profile" width={96} height={96} className="w-full h-full object-cover" />
					</div>
					<div>
						<h1 className="text-2xl font-bold">Dr Ramaroson Lucienne</h1>
						<p className="text-gray-200">Médecin généraliste</p>
					</div>
				</div>
			</motion.div>

			<div className="container mx-auto p-4 max-w-6xl">
				<div className="mb-8">
					<h1 className="text-xl font-semibold mb-4">Prenez votre rendez-vous en ligne</h1>
					<p className="text-muted-foreground mb-8">Renseignez les informations suivantes</p>

					<div className="grid lg:grid-cols-[1fr,400px] gap-8">
						<div className="space-y-6">
							<Button variant="ghost" className="flex items-center gap-2">
								<ChevronLeft className="w-4 h-4" />
								Étape précédente
							</Button>

							<Cal
								namespace="20min-merignac"
								calLink="dr-sarah-johnson/20min-merignac"
								style={{ width: "100%", height: "100%", overflow: "auto" }}
								config={{ layout: "month_view" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
