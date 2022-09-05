import About from "./components/About/Index";
import Header from "./components/Header/Index";
import Footer from './components/Footer/Index';
import Skills from "./components/Skills/Index";
import Internship from "./components/Internship/Index";
import Projects from "./components/Projects/Index";
import ContactMe from './components/Contactus/Index';
// import{BrowserRouter as Router,
// Routes,Route
//   } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div id="home">
   <Header/>
   <About/>

<Skills/>
<Internship/>
<Projects/>
<ContactMe/>





   {/* Footer Section// */}
    <Footer/>
    
    

{/* <Router>
<Routes>
  <Route path="about" element={<About/>}/>
  <Route path="skill" element={<Skills/>}/>
  <Route path="Internship" element={<Internship/>}/>
  <Route path="Projects" element={<Projects/>}/>
  <Route path="ContactMe" element={<ContactMe/>}/>
</Routes>



</Router> */}



    </div>
  );
}

export default App;
