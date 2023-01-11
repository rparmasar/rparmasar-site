import React from 'react'
import { useLocation } from 'react-router-dom';
import useLocalData from '../../hooks/useLocalData';
import AdditionalSection from './AdditionalSection/AdditionalSection';
import FixedSection from './FixedSection/FixedSection';

import ProjectLanding from './ProjectLanding/ProjectLanding';

import './SingleProjectPage.css';

export default function SingleProjectPage() {
    const { state: { project_id } } = useLocation();

    // Get our JSON data filtered to the correct id
    const [pageData] = useLocalData("projects/single-pages.json", project_id);

  return (
    <>
        {pageData && 
            <>
                <ProjectLanding 
                    bg_img_path={pageData.content.jumbotron.background_image}
                    header_text={pageData.content.jumbotron.header_text}
                    body_text={pageData.content.jumbotron.body_text}
                    primary_cta={pageData.content.jumbotron.primary_cta}
                    secondary_cta={pageData.content.jumbotron.secondary_cta}
                />
                <FixedSection />
                <AdditionalSection />
                <AdditionalSection />
            </>
        }
    </>
  )
}
