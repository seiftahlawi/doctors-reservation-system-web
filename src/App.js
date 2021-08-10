
import './App.css';
import Home from'./pages/HomePage/Home'
import{BrowserRouter,Route} from "react-router-dom"
import Login from './pages/LoginPage/Login'
import SignUp from './pages/SignUp/SignUp'
import User from './pages/userPage/User'
import DoctorProfile from './pages/userPage/DoctorProfile'
import PatientsMainPage from './pages/PatientsMainPage/PatientsMainPage'
import AboutUs from './pages/PatientsMainPage/AppComponant/AboutUs'
import AboutUsD from './pages/DoctorsMainPage/Component/AboutUs'
import GeneralMedicine from './pages/PatientsMainPage/GeneralMedicine'
import Dentist from './pages/PatientsMainPage/Dentist'
import Psychologist from './pages/PatientsMainPage/Psychologist'
import Ophthalmologist from './pages/PatientsMainPage/Ophthalmologist'
import ReproductiveDoctor from './pages/PatientsMainPage/ReproductiveDoctor'
import Dermatologist from './pages/PatientsMainPage/Dermatologist'
import PlasticSurgeries from  './pages/PatientsMainPage/PlasticSurgeries'
import DoctorsMainPage from './pages/DoctorsMainPage/DoctorsMainPage'
import Patients from './pages/DoctorsMainPage/Component/Patients'
import PatientsProfile from './pages/DoctorsMainPage/Component/PatientsProfile'
function App() {
  
  return (
  

    <div >
      <BrowserRouter>
   
     <Route path="/Signin" exact component={Login}/>
     <Route path="/SignUp" exact component={SignUp}/>
     <Route path="/DoctorProfile" exact component={DoctorProfile}/>
     <Route path="/PatientsMainPage" exact component={PatientsMainPage}/>
     <Route path="/DoctorsMainPage" exact component={DoctorsMainPage}/>
     <Route path="/Profile" exact component={User}/>
     <Route path="/AboutUs" exact component={AboutUs}/>
     <Route path="/GeneralMedicine" exact component={GeneralMedicine}/>
     <Route path="/Dentist" exact component={Dentist}/>
     <Route path="/Psychologist" exact component={Psychologist}/>
     <Route path="/Ophthalmologist" exact component={Ophthalmologist}/>
     <Route path="/ReproductiveDoctor" exact component={ReproductiveDoctor}/>
     <Route path="/Dermatologist" exact component={Dermatologist}/>
     <Route path="/PlasticSurgeries" exact component={PlasticSurgeries}/>
     <Route path="/PatientsProfile" exact component={PatientsProfile}/>
     <Route path="/AllPatients" exact component={Patients}/>
     <Route path="/AboutUsD" exact component={AboutUsD}/>
     <Route path="/" exact component={Home}/>
     </BrowserRouter>
    </div>
   
  );
}

export default App;
