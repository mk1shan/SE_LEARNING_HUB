import { createContext, useContext, useState, useCallback } from 'react';
import { learningPaths } from '../data/learningPaths';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchContent = useCallback((query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    const results = [];
    const searchQuery = query.toLowerCase();

    // Search learning paths
    Object.entries(learningPaths).forEach(([id, path]) => {
      if (
        path.title.toLowerCase().includes(searchQuery) ||
        path.description.toLowerCase().includes(searchQuery)
      ) {
        results.push({
          type: 'path',
          id,
          title: path.title,
          description: path.description,
          url: `/path-template?path=${id}`
        });
      }
    });

    // Search articles section
    const articles = document.querySelectorAll('.article-card');
    articles.forEach(article => {
      const title = article.querySelector('.article-title')?.textContent || '';
      const description = article.querySelector('.article-description')?.textContent || '';
      const link = article.querySelector('.article-link')?.href;

      if (
        title.toLowerCase().includes(searchQuery) ||
        description.toLowerCase().includes(searchQuery)
      ) {
        results.push({
          type: 'article',
          id: title,
          title: title,
          description: description,
          url: link || '#articles'
        });
      }
    });

    // Add certifications
    const certificationTypes = [
      { 
        id: 'aws', 
        title: 'AWS Certifications',
        description: 'Amazon Web Services cloud certifications'
      },
      { 
        id: 'azure', 
        title: 'Microsoft Azure',
        description: 'Microsoft cloud platform certifications'
      },
      {
        id: 'google',
        title: 'Google Cloud',
        description: 'Google Cloud Platform certifications'
      }
    ];

    certificationTypes.forEach(cert => {
      if (
        cert.title.toLowerCase().includes(searchQuery) ||
        cert.description.toLowerCase().includes(searchQuery)
      ) {
        results.push({
          type: 'certification',
          id: cert.id,
          title: cert.title,
          description: cert.description,
          url: '/certifications'
        });
      }
    });

    // Add interview prep topics
    const interviewTopics = [
      {
        id: 'algorithms',
        title: 'Algorithms & Data Structures',
        description: 'Common algorithmic problems and data structure implementations'
      },
      {
        id: 'system-design',
        title: 'System Design',
        description: 'Architecture and system design interview preparation'
      }
    ];

    interviewTopics.forEach(topic => {
      if (
        topic.title.toLowerCase().includes(searchQuery) ||
        topic.description.toLowerCase().includes(searchQuery)
      ) {
        results.push({
          type: 'interview',
          id: topic.id,
          title: topic.title,
          description: topic.description,
          url: '/interview-prep'
        });
      }
    });

    setSearchResults(results);
    setIsSearching(false);
  }, []);

  const clearSearch = () => {
    setSearchResults([]);
    setIsSearching(false);
  };

  return (
    <SearchContext.Provider value={{ searchResults, isSearching, searchContent, clearSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}