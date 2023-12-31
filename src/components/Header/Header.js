import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillGitlab, AiFillInstagram, AiFillLinkedin, AiTwotoneStar } from 'react-icons/ai';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
<Container>
  <Div1>
    <Link href="/">
      <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20;px'}}>
        <AiTwotoneStar size="2rem" /> <Span> Portofolio </Span>
      </a>
    </Link>
  </Div1>
  <Div2>
    <li>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
        <NavLink>Tech</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
    </li>
  </Div2>
  <Div3>
    <SocialIcons href="https://github.com/ayuayuputri25">
      <AiFillGithub size="4rem" />
    </SocialIcons>
    <SocialIcons href="https://gitlab.com/ayuayuputri25">
      <AiFillGitlab size="4rem" />
    </SocialIcons>
    <SocialIcons href="https://www.instagram.com/ayuonproject/">
      <AiFillInstagram size="4rem" />
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/ayu-dewanti-putri-250899/">
      <AiFillLinkedin size="4rem" />
    </SocialIcons>
  </Div3>
</Container>
);

export default Header;
