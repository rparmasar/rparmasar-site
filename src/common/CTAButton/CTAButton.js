import React from 'react';
import Button from 'react-bootstrap/Button';

import './CTAButton.css';

export default function CTAButton({ outline, level, text }) {
    let target_level = '';
    // Figure out which colour we want to use based on level
    switch (level) {
        case 'primary':
            target_level = 'primary';
            break;
        
        case 'secondary':
            target_level = 'secondary';
            break;

        default:
            target_level = 'primary';
            break;
    }
    
    if (outline) {
        return(
            <Button className={`cta-btn-outline-${target_level}`} variant='outline-primary'>
                {text}
            </Button>
        )
    } else {
        return(
            <Button className={`cta-btn-${target_level}`} variant='primary'>
                {text}
            </Button>
        )
    }

}
