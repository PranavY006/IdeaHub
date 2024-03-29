import React ,{useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,NavLogo,NavbarContainer,MobileIcon,NavLinks,NavMenu,NavItem,NavBtn,NavBtnLink} from './NavbarElements'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {
  const [scollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
    <Nav scollNav={scollNav}>
        <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
                IdeaHub
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='diff'
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                >Diff Types</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='software'
                 smooth={true} duration={500} spy={true} exact='true' offset={-80}
                 >Software</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='hardware'
                 smooth={true} duration={500} spy={true} exact='true' offset={-80}
                 >HardWare</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='iot'
                 smooth={true} duration={500} spy={true} exact='true' offset={-80}
                 >IOT</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
    </>
  );
};

export default Navbar