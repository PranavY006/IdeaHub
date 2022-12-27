import React,{useState} from 'react'
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import InfoSection from '../Components/InfoSection';
import { homeobjOne } from '../Components/InfoSection/Data';

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
    <InfoSection {...homeobjOne}/>
    </>
  )
}

export default Home