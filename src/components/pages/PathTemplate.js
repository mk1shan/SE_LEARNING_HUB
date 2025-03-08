import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { learningPaths } from '../../data/learningPaths';
import '../../styles/path-template.css';

function PathTemplate() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const params = new URLSearchParams(location.search);
  const pathId = params.get('path');

  useEffect(() => {
    if (learningPaths[pathId]) {
      setCurrentPath(learningPaths[pathId]);
      setActiveSection(learningPaths[pathId].sections[0]);
    } else {
      navigate('/');
    }
  }, [pathId, navigate]);

  const handleResourceClick = (resource) => {
    if (resource.isLanguage) {
      navigate(`/language-template?lang=${resource.platform.toLowerCase()}`);
    } else if (resource.url) {
      window.open(resource.url, '_blank', 'noopener noreferrer');
    }
  };

  if (!currentPath) {
    return (
      <div className="path-loading">
        <FontAwesomeIcon icon="spinner" spin />
        <p>Loading path content...</p>
      </div>
    );
  }

  return (
    <div className="path-template">
      <header className="path-header">
        <div className="path-header-content">
          <h1>{currentPath.title}</h1>
          <p>{currentPath.description}</p>
        </div>
      </header>

      <div className="path-content">
        <nav className="path-sidebar">
          {currentPath.sections.map((section, index) => (
            <button
              key={index}
              className={`section-button ${activeSection === section ? 'active' : ''}`}
              onClick={() => setActiveSection(section)}
            >
              {section.title}
            </button>
          ))}
        </nav>

        <main className="path-main">
          {activeSection && (
            <section className="section-content">
              <h2>{activeSection.title}</h2>
              <div className="resources-grid">
                {activeSection.resources.map((resource, index) => (
                  <div
                    key={index}
                    className="resource-card"
                    onClick={() => handleResourceClick(resource)}
                  >
                    <div className="resource-icon">
                      <FontAwesomeIcon 
                        icon={getResourceIcon(resource.type)} 
                        className={`resource-type-${resource.type}`}
                      />
                    </div>
                    <div className="resource-info">
                      <h3>{resource.name}</h3>
                      <span className="resource-platform">{resource.platform}</span>
                      <span className="resource-type">{formatResourceType(resource.type)}</span>
                    </div>
                    <div className="resource-arrow">
                      <FontAwesomeIcon icon={resource.isLanguage ? 'arrow-right' : 'external-link-alt'} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

function getResourceIcon(type) {
  switch (type.toLowerCase()) {
    case 'course':
      return 'graduation-cap';
    case 'tutorial':
      return 'book-reader';
    case 'documentation':
      return 'book';
    case 'video':
      return 'video';
    case 'interactive':
      return 'laptop-code';
    case 'article':
      return 'newspaper';
    case 'practice':
      return 'code';
    case 'certification':
      return 'certificate';
    case 'book':
      return 'book';
    case 'guide':
      return 'map';
    case 'language':
      return 'code';
    default:
      return 'link';
  }
}

function formatResourceType(type) {
  return type.charAt(0).toUpperCase() + type.slice(1);
}

export default PathTemplate;