import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import useLocalData from '../../hooks/useLocalData';
// import Container from 'react-bootstrap/Container';

// import Header from '../../common/Header/Header';
// import Section from '../../common/Section/Section';
import ProjectLanding from './ProjectLanding/ProjectLanding';

import './SingleProjectPage.css';

export default function SingleProjectPage() {
    const { state: { project_id } } = useLocation();

    // Get our JSON data and filter to the correct id
    const [pageData] = useLocalData("projects/single-pages.json");
    const filtered_data = pageData.filter(page_obj => page_obj.project_id === project_id)[0];

    // Jumbotron props
    const { background_image, header_text, body_text, primary_cta, secondary_cta } = filtered_data.content.jumbotron;
    

  return (
    <>
        <ProjectLanding 
            bg_img_path={background_image}
            header_text={header_text}
            body_text={body_text}
            primary_cta={primary_cta}
            secondary_cta={secondary_cta}
        />
    </>
  )
}
