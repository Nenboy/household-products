import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../../components/CategoryCard'; // Import CategoryCard component
import './Categories.css';

const categories = [
  { id: 'bedroom', name: 'Bedroom' },
  { id: 'living room', name: 'Living Room' },
  { id: 'kitchen', name: 'Kitchen' },
  { id: 'dining room', name: 'Dining Room' },
  { id: 'office', name: 'Office' },
];

function Categories() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      setSearchTerm(e.target.value || '');
    }
  };

  return (
    <div className="app">
      <header className="header">
        <button className="back-button" onClick={handleBack}><i class="fa-solid fa-arrow-left"></i></button>
        <h1 className="title">Categories</h1>
        {/* <div style={{ width: 24 }}></div> */}

        <div className="search-wrapper">
          { !showSearch && (
            <button className="search-icon" onClick={() => setShowSearch(true)}>
    <i className="fa-solid fa-magnifying-glass"></i>
  </button>
          )}
  

  {showSearch && (
    <input
      type="text"
      className="search-input"
      placeholder="Search..."
      value={searchTerm}
      autoFocus
      onChange={(e) => setSearchTerm(e.target.value)}
      onBlur={() => {
        if (searchTerm === '') setShowSearch(false);
      }}
    />
  )}
</div>

      </header>

     

      <div className="container">
        <div className="grid">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat) => (
              <CategoryCard key={cat.id} name={cat.name} />
            ))
          ) : (
            <p className="no-results">No categories found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Categories;