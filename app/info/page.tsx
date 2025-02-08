import React from 'react'

import LegalMentions from '@/components/LegalMentions'
import Navigation from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import FooterBottom from '@/components/FooterBottom'

export const metadata = {
	title: 'Legal mention - Dr Sarah Johnson',
}

const page = () => {
	return (
		<>
			<Navigation />
			<LegalMentions />
			{/* <Footer /> */}
			<FooterBottom />
		</>
	)
}

export default page