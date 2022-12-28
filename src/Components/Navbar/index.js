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
                <NavLinks to='about'
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                >About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='discover'
                 smooth={true} duration={500} spy={true} exact='true' offset={-80}
                 >Discover</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='ideas'
                 smooth={true} duration={500} spy={true} exact='true' offset={-80}
                 >Ideas</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='diff'
                 smooth={true} duration={500} spy={true} exact='true' offset={-80}
                 >Sign Up</NavLinks>
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