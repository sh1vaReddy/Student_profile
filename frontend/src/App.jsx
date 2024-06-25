import {
  Route,RouterProvider,createBrowserRouter,createRoutesFromElements,
} from "react-router-dom";
import StudentProfile from './components/student_Proile'
import Getstudent from "./components/Getstudent";
import Studentpanel from "./components/Studentpanel";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
         <Route path='/' element={<Studentpanel/>}/>
         <Route path="/create" element={<StudentProfile />} />
         <Route path='/profile' element={<Getstudent/>}/>
      </Route>
    )
  );

  return (
    <>
    <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
