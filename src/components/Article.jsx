import React, { useState } from 'react';

const LIMIT = 200;

const Article = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= LIMIT) {
    return <article>{text}</article>;
  }

  return (
    <div>
      <article>{isExpanded ? text : `${text.substring(0, LIMIT)}...`}</article>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Show Less' : 'Read More'}
      </button>
    </div>
  );
};

export default Article;
