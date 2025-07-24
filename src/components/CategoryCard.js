import React from 'react';

const CategoryCard = ({ name, image }) => {
  return (
    <div className="category-card">
      <p className='category-name'>{name}</p>
    </div>
  );
};

export default CategoryCard;