
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Homepage from './Components/Homepage';
import TrainTickets from './Components/TrainTickets';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {


  return (
    <>
        <BrowserRouter>
           <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/railways" element={<TrainTickets />}></Route>
              <Route path="*" element={<><div><h1 style={{color:"red"}}>404 : Page not Found</h1></div></>}></Route>
            </Routes>
           <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
