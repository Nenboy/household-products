// src/components/CategoryCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const path = `/assets/Categories/${name.toLowerCase().replace(/\s+/g, '')}`;
    navigate(path);
  };

  return (
    <div className="category-card" onClick={handleClick}>
      <div className="category-image-placeholder">{/* Optional image */}</div>
      <p className="category-name">{name}</p>
    </div>
  );
};

export default CategoryCard;
