import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
    <LinkList>
     <LinkColumn>
       <LinkTitle>Email</LinkTitle>
       <LinkItem href="mailto:ayuayuputri25@gmail.com">ayuayuputri25@gmail.com</LinkItem>
     </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Always learning always progressing</Slogan>
        <SocialIcons href="https://www.instagram.com/ayudputrii/">
      <AiFillInstagram size="4rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/ayu-dewanti-putri-250899/">
      <AiFillLinkedin size="4rem" />
         </SocialIcons>
      </CompanyContainer>
    </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
