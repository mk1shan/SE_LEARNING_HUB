import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSearch } from '../../contexts/SearchContext';
import SearchResults from './SearchResults';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const searchRef = useRef(null);
  const { searchResults, isSearching, searchContent, clearSearch } = useSearch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    searchContent(value);
    setShowResults(true);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      // Navigate to first result
      window.location.href = searchResults[0].url;
      clearSearch();
      setShowResults(false);
      setSearchTerm('');
    }
  };

  const handleResultClick = () => {
    setShowResults(false);
    setSearchTerm('');
    clearSearch();
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToArticles = (e) => {
    e.preventDefault();
    const articlesSection = document.getElementById('articles');
    if (articlesSection) {
      articlesSection.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      window.location.href = '/#articles';
    }
    closeMenu();
  };

  return (
    <nav className="main-nav" role="navigation" aria-label="Main navigation">
      <div className="logo" role="banner">
        <Link to="/">SE Learning Hub</Link>
      </div>
      <div className="nav-search" ref={searchRef}>
        <form className="search-form" role="search" onSubmit={handleSearchSubmit}>
          <input 
            type="search" 
            className="search-input" 
            placeholder="Search paths, articles..." 
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-button" aria-label="Submit search">
            {isSearching ? (
              <FontAwesomeIcon icon="spinner" spin />
            ) : (
              <FontAwesomeIcon icon="search" />
            )}
          </button>
          <SearchResults 
            results={searchResults}
            isVisible={showResults}
            onResultClick={handleResultClick}
          />
        </form>
      </div>
      <button 
        className="mobile-menu-btn" 
        aria-label="Toggle navigation menu"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={isMenuOpen ? "times" : "bars"} />
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`} role="menubar">
        <li role="none">
          <Link to="/#paths" role="menuitem" onClick={closeMenu}>
            <FontAwesomeIcon icon="map-signs" /> Learning Paths
          </Link>
        </li>
        <li role="none">
          <Link to="/certifications" role="menuitem" onClick={closeMenu}>
            <FontAwesomeIcon icon="certificate" /> Certifications
          </Link>
        </li>
        <li role="none">
          <a href="#articles" role="menuitem" onClick={scrollToArticles}>
            <FontAwesomeIcon icon="newspaper" /> Articles
          </a>
        </li>
        <li role="none">
          <Link to="/interview-prep" role="menuitem" onClick={closeMenu}>
            <FontAwesomeIcon icon="user-tie" /> Interview Prep
          </Link>
        </li>
        <li role="none">
          <Link to="/ratings" role="menuitem" onClick={closeMenu}>
            <FontAwesomeIcon icon="star" /> Ratings
          </Link>
        </li>
        <li role="none">
          <Link to="/recommend" role="menuitem" onClick={closeMenu}>
            <FontAwesomeIcon icon="plus-circle" /> Suggest Resource
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;