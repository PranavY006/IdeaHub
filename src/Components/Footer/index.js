import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink , SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
      };
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About US</FooterLinkTitle>
                            <FooterLink to="/signin">How to Works</FooterLink>
                            <FooterLink to="/signin">Where to start</FooterLink>
                            <FooterLink to="/signin">Select The Difficulty</FooterLink>
                            <FooterLink to="/signin">Select the Topics</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About US</FooterLinkTitle>
                            <FooterLink to="/signin">How to Works</FooterLink>
                            <FooterLink to="/signin">Where to start</FooterLink>
                            <FooterLink to="/signin">Select The Difficulty</FooterLink>
                            <FooterLink to="/signin">Select the Topics</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About US</FooterLinkTitle>
                            <FooterLink to="/signin">How to Works</FooterLink>
                            <FooterLink to="/signin">Where to start</FooterLink>
                            <FooterLink to="/signin">Select The Difficulty</FooterLink>
                            <FooterLink to="/signin">Select the Topics</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About US</FooterLinkTitle>
                            <FooterLink to="/signin">How to Works</FooterLink>
                            <FooterLink to="/signin">Where to start</FooterLink>
                            <FooterLink to="/signin">Select The Difficulty</FooterLink>
                            <FooterLink to="/signin">Select the Topics</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        <SocialIcons />
                        VU2s22230
                    </SocialLogo>
                    <WebsiteRights>© {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer