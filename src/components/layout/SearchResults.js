import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchResults({ results, onResultClick, isVisible }) {
  const navigate = useNavigate();

  if (!isVisible || results.length === 0) {
    return null;
  }

  const handleClick = (result) => {
    navigate(result.url);
    onResultClick();
  };

  const getIcon = (type) => {
    switch (type) {
      case 'path':
        return 'graduation-cap';
      case 'article':
        return 'newspaper';
      case 'certification':
        return 'certificate';
      default:
        return 'search';
    }
  };

  return (
    <div className="search-results">
      {results.map((result, index) => (
        <div
          key={`${result.type}-${result.id}`}
          className="search-result-item"
          onClick={() => handleClick(result)}
        >
          <FontAwesomeIcon icon={getIcon(result.type)} className="result-icon" />
          <div className="result-content">
            <div className="result-title">{result.title}</div>
            <div className="result-description">{result.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;