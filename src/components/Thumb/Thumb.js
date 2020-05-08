import React from 'react'

const Thumb = ({
    classes,
    src,
    alt,
    title
}) => (
  <div className={classes}>
      <img src={src} alt={alt} title={title} />
  </div>
);

export default Thumb;