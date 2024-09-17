/* eslint-disable react/prop-types */
import React from 'react';

const ImageLists = ({ imageLists }) => {
  if (!imageLists || imageLists.length === 0) {
    return null;
  }

  return (
    <ul>
      {imageLists.map((image, index) => (
        <li key={index}>
          <img src={image} alt={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageLists;
