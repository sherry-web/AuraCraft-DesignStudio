import React from 'react';

const IconWrapper = ({ icon, altText }) => {
  return (
    <div className="icon-wrapper">
      <img src={icon} alt={altText} />
    </div>
  );
};

export default IconWrapper;