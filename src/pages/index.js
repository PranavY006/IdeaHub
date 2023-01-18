import React,{useState} from 'react'
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import InfoSection from '../Components/InfoSection';
import { homeobjOne, homeobjThree, homeobjTwo } from '../Components/InfoSection/Data';
import Diff from '../Components/Diff/index';
import Diff1 from '../Components/Diff/index2';
import Diff2 from '../Components/Diff/index3';
import Diff3 from '../Components/Diff/index4';
import Footer from '../Components/Footer';
import { DiffH2 } from '../Components/Diff/DiffElements';

const Home = () => {
    const [isOpen, setIsOpen] = useState (false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection />
    <Diff />
    <InfoSection {...homeobjOne}/>
    <Diff1 />
    <InfoSection {...homeobjTwo}/>
    <Diff2 />
    <InfoSection {...homeobjThree}/>
    <Diff3 />
    <Footer />
    
    </>
  )
}

export default Home