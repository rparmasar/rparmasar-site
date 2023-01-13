import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Section from '../../common/Section/Section';
import Header from '../../common/Header/Header';
import useLocalData from '../../hooks/useLocalData';

import './ProjectListPage.css';
import LoadingIcon from '../../common/LoadingIcon/LoadingIcon';


export default function ProjectListPage() {
    const [project_list, loading] = useLocalData('projects/overviews.json');

    if (!loading) {
        return (
            <Container className='plp-container'>
                <Row className='pt-2'>
                    <Header type='lg' text='Projects'/>
                </Row>
                <Row className='pt-2 mb-2'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac pretium nunc, vel condimentum libero. Morbi sed nisi sed leo suscipit facilisis. Pellentesque feugiat semper sapien, quis tincidunt ipsum consectetur vitae. Donec pharetra est leo, eget iaculis urna porta eu.</p>
                </Row>
                <Row className='pt-2'>
                    <Header type='md' text='Explore'/>
                </Row>
                <Row className='pt-2'>
                    {project_list && project_list.map(project => {
                        if (project.content.source_url) {
                            return(
                                <Section
                                    project_id={project.id} 
                                    header_text={project.content.header_text}
                                    body_text={project.content.body_text}
                                    img_name={project.content.image}
                                    icon_list={project.content.icon_list}
                                    source_url={project.content.source_url}
                                    include_cta_bw
                                    key={project.id}
                                />
                            )
                        } else {
                            return(
                                <Section
                                    project_id={project.id} 
                                    header_text={project.content.header_text}
                                    body_text={project.content.body_text}
                                    img_name={project.content.image}
                                    key={project.id}
                                />
                            )
    
                        }
                    })}
                </Row>
            </Container>
        )
    } else {
        return (
            <LoadingIcon />
        )
    }
}
