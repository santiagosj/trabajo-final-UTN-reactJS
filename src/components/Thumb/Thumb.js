import React from 'react'
import './Thumb.scss'

const Thumb = ({
    src,
    alt,
    title
}) => {
  const tokens = ['a9b24514-34d6-46fe-acda-7aa6835be2fa','7095e00d-acd1-4bd1-85ef-487fbaa8621e']
  return (
        <div className='productImg'>
            <img 
              className={tokens.some(elem => src.includes(elem)) ? 'customSizes' : 'size'}
              src={src} 
              alt={alt} 
              title={title} 
            />
       </div>
  )}
  


export default Thumb;