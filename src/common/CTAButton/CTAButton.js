import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import './CTAButton.css';

export default function CTAButton({ outline=false, level, text, className='', button_href='', button_route='/', button_state={}, containerClassname=''}) {
    // NOTE: Use ONE of `button_route` (internal links) or `button_href` (external links)
    let target_level = '';
    let btn_elem = <></>;
    
    // Figure out which colour we want to use based on level
    switch (level) {
        case 'primary':
            target_level = 'primary';
            break;
        
        case 'secondary':
            target_level = 'secondary';
            break;
        
        case 'source':
            target_level = 'source';
            break;

        default:
            target_level = 'primary';
            break;
    }

    if (outline) {
        btn_elem = <Button className={className ? `cta-btn cta-btn-outline-${target_level} ${className}` : `cta-btn cta-btn-outline-${target_level}`} variant='outline-primary'>
            {text}
        </Button>
    } else {
        btn_elem = <Button className={className ? `cta-btn cta-btn-${target_level} ${className}` : `cta-btn cta-btn-${target_level}` } variant='primary'>
            {text}
        </Button>
    }

    if (button_href) {
        return(
            <a className={`cta-btn-container ${containerClassname}`} href={button_href}>{ btn_elem }</a>
        )
    }

    if (button_route) {
        return(
            <Link className={`cta-btn-container ${containerClassname}`} to={button_route} state={button_state}>{ btn_elem }</Link>
        )
    }

}
