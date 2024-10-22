import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PermanentDrawerLeft from './componate/PermanentDrawerLeft';
import Subcatagory from './componate/Subcatagory';
import Catagory from './componate/Catagory';
// https://interviewcrack.vercel.app/admin
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>



          <Route path="/*" element={<PermanentDrawerLeft />}>

            <Route path="Catagory" element={<Catagory />}>
            </Route>
          </Route>






        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
