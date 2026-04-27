import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashBoard from "./components/ui/Dashboard/DashBoard"
import SideBarLayout from "./components/ui/sidebar/SideBarLayout"
import Forms from "./pages/forms/Forms"
import Cards from "./pages/cards/Cards"
import Charts from "./pages/charts/Charts"
import Buttons from "./pages/buttons/Buttons"
import Modals from "./pages/modals/Modals"
import Tables from "./pages/tables/Tables"
import CreateAccount from "./pages/createAccount/CreateAccount"
import ForgotPassword from "./pages/forgotPassword/ForgotPassword"
import FourOFour from "./pages/fourOFour/FourOFour"
import Blank from "./pages/blank/Blank"
import Login  from "./pages/login/Login"
import AuthLayout from "./components/ui/AuthLayout"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SideBarLayout />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/modals" element={<Modals />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="*" element={<FourOFour />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>



      </Routes>
    </BrowserRouter>
  )
}

export default App