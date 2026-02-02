import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import SchedulePickup from "./pages/SchedulePickup"
import Pricing from "./pages/Pricing"

function App() {

	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="services" element={<Services />} />
					<Route path="pricing" element={<Pricing />} />
					<Route path="contact" element={<Contact />} />
					<Route path="schedule-pickup" element={<SchedulePickup />} />
				</Route>
			</Routes>
		</div>
	)
}
export default App;