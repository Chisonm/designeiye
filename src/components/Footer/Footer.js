import React from 'react';
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin} from 'react-icons/fa';
import { Button } from '../../globalStyles';
import {
    FooterContainer,
    FooterSubHeading,
    FooterSubcription,
    FooterSubText,
    Form,
    FormInput,
    FooterLinkContainer,
    FooterLinksItems,
    FooterLinksWrapper,
    FooterLinks,
    FooterLinksTitle,
    SocialIcon,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMedialWrapper,
    WebsiteRights,
} from './Footer.elements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubcription>
                <FooterSubHeading>
                    Join our exclusive Membership to receive the latest new and trends 
                </FooterSubHeading>
                <FooterSubText>
                    You can Unsubscribe at anytime.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="email@gmail.com" />
                        <Button fontBig >Subscribe</Button> 
                </Form>
            </FooterSubcription>
            <FooterLinkContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>About us</FooterLinksTitle>
                        <FooterLinks to="/sign-up">How it works</FooterLinks>
                        <FooterLinks to="/">Testimonials</FooterLinks>
                        <FooterLinks to="/">Career</FooterLinks>
                        <FooterLinks to="/">Investors</FooterLinks>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>Contact us</FooterLinksTitle>
                        <FooterLinks to="/sign-up">How it works</FooterLinks>
                        <FooterLinks to="/">Testimonials</FooterLinks>
                        <FooterLinks to="/">Career</FooterLinks>
                        <FooterLinks to="/">Investors</FooterLinks>
                    </FooterLinksItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>Videos</FooterLinksTitle>
                        <FooterLinks to="/sign-up">How it works</FooterLinks>
                        <FooterLinks to="/">Testimonials</FooterLinks>
                        <FooterLinks to="/">Career</FooterLinks>
                        <FooterLinks to="/">Investors</FooterLinks>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>Social media</FooterLinksTitle>
                        <FooterLinks to="/sign-up">How it works</FooterLinks>
                        <FooterLinks to="/">Testimonials</FooterLinks>
                        <FooterLinks to="/">Career</FooterLinks>
                        <FooterLinks to="/">Investors</FooterLinks>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinkContainer>
            <SocialMedia>
                <SocialMedialWrapper>
                    <SocialLogo to="/">
                        <SocialIcon />
                         Ultra
                    </SocialLogo>
                    <WebsiteRights>Ultra @ 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                        <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMedialWrapper>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
