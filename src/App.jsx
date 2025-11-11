import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"

function App() {

  return (
	  <div>
		  <Routes>
			  <Route path="/" element={<Layout />}>
				  <Route index element={<Home />} />
				  <Route path="about" element={<About />} />
				  <Route path="services" element={<Services />} />
			  </Route>
		  </Routes>
	  </div>
  )
}

export default App