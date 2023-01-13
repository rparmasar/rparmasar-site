import React from 'react';
import Container from 'react-bootstrap/Container';

import Section from '../../../common/Section/Section';

import WhyBuildIcon from '../../../assets/images/section-icons/confused.png';
import ChallengesIcon from '../../../assets/images/section-icons/obstacle.png';
import LearningsIcon from '../../../assets/images/section-icons/ability.png';

export default function FixedSection({ why_build_body_text, challenges_body_text, learnings_body_text }) {
  return (
    <Container>
        <Section 
            header_text='Why Build This?'
            header_type='lg'
            reverse img_name={WhyBuildIcon}
            use_static_img
            body_text={why_build_body_text}
            />
        <Section 
            header_text='Challenges'
            header_type='lg'
            img_name={ChallengesIcon}
            use_static_img
            body_text={challenges_body_text}
            />
        <Section
            header_text='Key Learnings'
            header_type='lg'
            reverse img_name={LearningsIcon}
            use_static_img
            body_text={learnings_body_text}
        />
    </Container>
  )
}
