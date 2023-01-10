import React from 'react';
import Container from 'react-bootstrap/Container';

import Section from '../../../common/Section/Section';

import WhyBuildIcon from '../../../assets/images/section-icons/confused.png';
import ChallengesIcon from '../../../assets/images/section-icons/obstacle.png';
import LearningsIcon from '../../../assets/images/section-icons/ability.png';

export default function FixedSection() {
  return (
    <Container>
        <Section 
            header_text='Why Build This?'
            header_type='lg'
            reverse img_name={WhyBuildIcon}
            use_static_img
            body_text={
                <p>lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem</p>
            }
        />
        <Section 
            header_text='Challenges'
            header_type='lg'
            img_name={ChallengesIcon}
            use_static_img
        />
        <Section
            header_text='Key Learnings'
            header_type='lg'
            reverse img_name={LearningsIcon}
            use_static_img
        />
    </Container>
  )
}
