import React,{useState} from 'react'
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import InfoSection from '../Components/InfoSection';
import { homeobjOne, homeobjThree, homeobjTwo } from '../Components/InfoSection/Data';
import Diff from '../Components/Diff';
import Footer from '../Components/Footer';

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
    <InfoSection {...homeobjTwo}/>
    <InfoSection {...homeobjThree}/>
    <Footer />
    </>
  )
}

export default Home