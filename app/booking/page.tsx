"use client";

import Link from "next/link";
import Image from "next/image";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
// import Navigation from "@/components/Navigation";
// import { motion } from "framer-motion";
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
				layout: "column_view"
			});
		})();
	}, []);

	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 }
	};

	return (
		<>
			{/* <Navigation /> */}
			<div className="container mx-auto px-4 flex items-center gap-6">
				<div className="grid lg:grid-cols-[1fr,400px] gap-8">
					<div className="space-y-6">
						<Link href="https://docto-mu.vercel.app">
							<Button variant="ghost" className="flex items-center gap-2">
								<ChevronLeft className="w-4 h-4" />
								Retour
							</Button>
						</Link>
					</div>
				</div>
				<Cal
					namespace="20min-merignac"
					calLink="dr-sarah-johnson/20min-merignac"
					style={{ width: "100%", height: "100%", overflow: "auto" }}
					config={{ layout: "column_view" }}
				/>
			</div>
		</>
	);
}
