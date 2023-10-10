import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
       <SectionTitle main center>
         Hi, <br />
         I am Ayu, a software engineer.
       </SectionTitle>
       <SectionText>
          The purpose of this portofolio is to showcase my work and open for learning opportunities <br />
           I can help you build your website,I can be reach out through the button below me , see you
       </SectionText>
       <Button onClick={() => window.location= 'https://www.linkedin.com/in/ayu-dewanti-putri-250899/'}>Learn More</Button>
    </LeftSection>
    </Section>
);

export default Hero;