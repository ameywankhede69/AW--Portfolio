import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";





function App() {
  const[selectedPage, setSelectedPage]= useState("home");
  const[isTopOfPage,setisTopOfPage]= useState(true);
  const isAboveMediumScreens = useMediaQuery(("min-width: 1060px"));

  useEffect(()=>{
    const handleScroll = ()=> {
      if(window.scrollY===0) setisTopOfPage(true);
      if(window.scrollY!==0) setisTopOfPage(false);
    }
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll);
  },[]);

  return (
  <div className="app bg-deep-blue">
   <Navbar 
   isTopOfPage = {isTopOfPage} 
   selectedPage={selectedPage} 
   setSelectedPage={setSelectedPage}
   />
   <div className="w-5/6 mx-auto md:h-full mb-8">
   {isAboveMediumScreens && (
    <DotGroup
     selectedPage={selectedPage}
     setSelectedPage={setSelectedPage}
     />
   )}
   <Landing setSelectedPage = {setSelectedPage}/>
   </div>
   <LineGradient/>
   <div className="w-5/6 mx-auto md:h-full mb-20">
   <MySkills/>

   </div>
   
   <LineGradient/>
   <div className="w-5/6 mx-auto mb-8">
   <Projects/>

   </div>
   <LineGradient/>
   <div className="w-5/6 mx-auto md:h-full mb-20">
   <Testimonials/>

   </div>
   <LineGradient/>
   
   <div className="w-5/6 mx-auto md:h-full">
   <Contact/>

   </div>
   <Footer/>
  </div>
  );
}

export default App;
