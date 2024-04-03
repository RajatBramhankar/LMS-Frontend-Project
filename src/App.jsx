import './App.css';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './assets/Components/Auth/RequireAuth';
import AboutUs from './assets/Pages/AboutUs';
import Contact from './assets/Pages/Contact';
import CourseDescription from './assets/Pages/Course/CourseDescription';
import CourseList from './assets/Pages/Course/CourseList';
import CreateCourse from './assets/Pages/Course/CreateCourse';
import AddLecture from './assets/Pages/Dashboard/Addlecture';
import AdminDashboard from './assets/Pages/Dashboard/AdminDashboard';

import Displaylectures from './assets/Pages/Dashboard/Displaylectures';
import Denied from './assets/Pages/Denied';
import HomePage from './assets/Pages/HomePage';
import Login from './assets/Pages/Login';
import NotFound from './assets/Pages/NotFound';
import Checkout from './assets/Pages/Payment/Checkout';
import CheckoutFailure from './assets/Pages/Payment/CheckoutFailure';
import CheckoutSuccess from './assets/Pages/Payment/CheckoutSuccess';
import Signup from './assets/Pages/Signup';
import EditProfile from './assets/Pages/User/EditProfile';
import Profile from './assets/Pages/User/Profile';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/about" element={<AboutUs />} ></Route>\
        <Route path="/courses" element={<CourseList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/denied" element={<Denied />} />

        <Route path="/course/description" element={<CourseDescription />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/course/create" element={<CreateCourse />} />
          <Route path="/course/addlecture" element={<AddLecture />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
          <Route path='/user/profile' element={<Profile />} />
          <Route path='/user/editprofile' element={<EditProfile />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkout/success' element={<CheckoutSuccess />} />
          <Route path='/checkout/fail' element={<CheckoutFailure />} />
          <Route path='/course/displaylectures' element={<Displaylectures />}/>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App