import "./App.css";
import MainPage from './components/main/main'
import CSEForm3 from "./components/CSEForm3";
import CSEForm5 from "./components/CSEForm5";
import CSEForm7 from "./components/CSEForm7";
import { Route, Routes } from "react-router-dom";
import EmailVerification from "./components/main/EmailVerification";
import Success from "./components/main/Success.jsx"
import PrivateRoute from "./components/main/EmailVerification";
import ECEForm3 from "./components/ECE/ECEForm3"
import ECEForm5 from "./components/ECE/ECEForm5";
import ECEForm7 from "./components/ECE/ECEForm7";
import CivilForm3 from "./components/Civil/CivilForm3";
import CivilForm5 from "./components/Civil/CivilForm5";
import CivilForm7 from "./components/Civil/CivilForm7";
import EEEForm3 from "./components/EEE/EEEForm3";
import EEEForm5 from "./components/EEE/EEEForm5";
import EEEForm7 from "./components/EEE/EEEForm7";
import MechForm3 from "./components/Mech/MechForm3";
import MechForm5 from "./components/Mech/MechForm5";
import MechForm7 from "./components/Mech/MechForm7";
// import Admin from "./components/Admin/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/email" element={<EmailVerification/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path="cse_sem7" element={<CSEForm7 />}/>
            <Route path="cse_sem3" element={<CSEForm3 />} />
            <Route path="cse_sem5" element={<CSEForm5 />} />
            <Route path="ece_sem3" element={<ECEForm3 />} />
            <Route path="ece_sem5" element={<ECEForm5 />} />
            <Route path="ece_sem7" element={<ECEForm7 />} />
            <Route path="civil_sem3" element={<CivilForm3 />} />
            <Route path="civil_sem5" element={<CivilForm5 />} />
            <Route path="civil_sem7" element={<CivilForm7 />} />
            <Route path="eee_sem3" element={<EEEForm3 />} />
            <Route path="eee_sem5" element={<EEEForm5 />} />
            <Route path="eee_sem7" element={<EEEForm7 />} />
            <Route path="mech_sem3" element={<MechForm3 />} />
            <Route path="mech_sem5" element={<MechForm5 />} />
            <Route path="mech_sem7" element={<MechForm7 />} />
          </Route>
          {/* <Route path="admin" element={<Admin />} /> */}
        </Routes>
    </div>
  );
}

export default App;
