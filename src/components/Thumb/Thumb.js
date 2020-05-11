import React from 'react'

const styles = {
  maxWidth: '250px'
}

const Thumb = ({
    classes,
    src,
    alt,
    title
}) => (
  <div className={classes}>
      <img 
        src={src} 
        alt={alt} 
        title={title} 
        style={styles}
      />
  </div>
);

export default Thumb;