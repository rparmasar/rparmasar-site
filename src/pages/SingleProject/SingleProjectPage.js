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
                <FixedSection
                    why_build_body_text={pageData.content.why_build_this.body_text}
                    challenges_body_text={pageData.content.challenges.body_text}
                    learnings_body_text={pageData.content.learnings.body_text}
                />
                {pageData.content.additional_sections.map(add_sec => {
                    return(
                        <AdditionalSection 
                            header_text={add_sec.header_text}
                            body_text_arr={add_sec.body_text}
                            image={add_sec.image}
                            image_desc={add_sec.image_desc}
                        />
                    )
                })}
            </>
        }
    </>
  )
}
