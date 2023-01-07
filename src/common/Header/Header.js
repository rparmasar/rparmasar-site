import React from 'react'

import './Header.css';

export default function Header({type='lg', text, className}) {
    let header_class_name = ''
    switch (type) {
        case 'sm':
            header_class_name = 'header-underlined-sm'
            break;
        
        case 'md':
            header_class_name = 'header-underlined-md'
            break;
        
        case 'lg':
            header_class_name = 'header-underlined-lg'
            break;
        
        default:
            break;
    }

  return (
    <h2 className={`${header_class_name} ${className}`}>{text}</h2>
  )
}
