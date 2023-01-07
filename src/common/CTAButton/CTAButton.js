import React from 'react';
import Button from 'react-bootstrap/Button';

import './CTAButton.css';

export default function CTAButton({ outline, level, text, className=''}) {
    let target_level = '';
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
        return(
            <Button className={className ? `cta-btn cta-btn-outline-${target_level} ${className}` : `cta-btn cta-btn-outline-${target_level}`} variant='outline-primary'>
                {text}
            </Button>
        )
    } else {
        return(
            <Button className={className ? `cta-btn cta-btn-${target_level} ${className}` : `cta-btn cta-btn-${target_level}` } variant='primary'>
                {text}
            </Button>
        )
    }

}
